declare const UniqueId: string
type Loader = () => Promise<Result>

export type Result = any

/**
 * A cache of resources to avoid loading the same module twice. This is important
 * because Webpack dynamic imports only expose an asynchronous API for loading
 * modules, so to be able to access already-loaded modules synchronously we
 * must have stored the previous result somewhere.
 */
const resourceMap = new Map<typeof UniqueId, Resource>()

/**
 * A generic resource: given some method to asynchronously load a value - the loader()
 * argument - it allows accessing the state of the resource.
 */
export class Resource {
  private error: Error | null
  private loader: Loader
  private promise: Promise<Result> | null
  private result: Result | null

  constructor(loader: Loader) {
    this.error = null
    this.loader = loader
    this.promise = null
    this.result = null
  }

  /**
   * Loads the resource if necessary.
   */
  load() {
    let promise = this.promise
    if (promise == null) {
      promise = this.loader()
        .then(result => {
          if (result.default) {
            result = result.default
          }
          this.result = result
          return result
        })
        .catch(error => {
          this.error = error
          throw error
        })
      this.promise = promise
    }
    return promise
  }

  /**
   * Returns the result, if available. This can be useful to check if the value
   * is resolved yet.
   */
  get() {
    if (this.result != null) {
      return this.result
    }
  }

  /**
   * This is the key method for integrating with React Suspense. Read will:
   * - "Suspend" if the resource is still pending (currently implemented as
   *   throwing a Promise, though this is subject to change in future
   *   versions of React)
   * - Throw an error if the resource failed to load.
   * - Return the data of the resource if available.
   */
  read() {
    if (this.result != null) {
      return this.result
    } else if (this.error != null) {
      throw this.error
    } else {
      throw this.promise
    }
  }
}

/**
 * A helper method to create a resource, intended for dynamically loading code.
 *
 * Example:
 * ```
 *    // Before rendering, ie in an event handler:
 *    const resource = JSResource('Foo', () => import('./Foo.js));
 *    resource.load();
 *
 *    // in a React component:
 *    const Foo = resource.read();
 *    return <Foo ... />;
 * ```
 *
 * @param {*} moduleId A globally unique identifier for the resource used for caching
 * @param {*} loader A method to load the resource's data if necessary
 */
export default function JSResource(moduleId: typeof UniqueId, loader: Loader) {
  let resource = resourceMap.get(moduleId)
  if (resource == null) {
    resource = new Resource(loader)
    resourceMap.set(moduleId, resource)
  }
  return resource
}
