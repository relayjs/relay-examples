import React, { Suspense } from 'react'
import { usePreloadedQuery } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'

import { RootQuery } from './__generated__/RootQuery.graphql'
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes'

interface Props {
  prepared: {
    rootQuery: PreloadedQuery<RootQuery>
  }
  children: React.ReactChildren
}

const Root = (props: Props) => {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.issuesQuery - see src/routes.js
  const data = usePreloadedQuery(
    graphql`
      query RootQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          owner {
            login
          }
          name
        }
      }
    `,
    props.prepared.rootQuery,
  )
  const { repository } = data

  return (
    <div className="root">
      <header className="header">
        {repository!.owner.login}/{repository!.name}: Issues
      </header>
      <section className="content">
        {/* Wrap the child in a Suspense boundary to allow rendering the
        layout even if the main content isn't ready */}
        <Suspense fallback={'Loading...'}>{props.children}</Suspense>
      </section>
    </div>
  )
}

export default Root
