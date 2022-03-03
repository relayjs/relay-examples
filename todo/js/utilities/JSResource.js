// @flow
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import type {JSResourceReference} from 'JSResourceReference';
class Resource<T> implements JSResourceReference<T> {
  static map: Map<string, Resource<T>> = new Map();

  _moduleId: string;
  _loader: () => Promise<T>;
  _loadingPromise: ?Promise<T>;
  _module: ?T;

  constructor(moduleId: string, loader: () => Promise<T>) {
    this._moduleId = moduleId;
    this._loader = loader;
    this._loadingPromise = undefined;
    this._module = undefined;
  }

  getModuleId(): string {
    return this._moduleId;
  }

  getModuleIfRequired(): ?T {
    return this._module;
  }

  load(): Promise<T> {
    if (!this._loadingPromise) {
      this._loadingPromise = this._loader()
        .then((module: T) => {
          this._module = module;
          return this._module;
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    }
    return this._loadingPromise;
  }
}

export default function JSResource<T>(
  moduleId: string,
  loader: () => Promise<T>,
): JSResourceReference<T> {
  let resource = Resource.map.get(moduleId);
  if (resource == null) {
    resource = new Resource(moduleId, loader);
    Resource.map.set(moduleId, resource);
  }
  return resource;
}
