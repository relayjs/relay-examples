/* eslint no-restricted-globals:0 */
import React, { useCallback, useContext } from 'react'
import RoutingContext from './RoutingContext'

interface Props {
  to: string
  children: React.ReactNode
}

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
export default function Link(props: Props) {
  const router = useContext(RoutingContext)

  // When the user clicks, change route
  const changeRoute = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      return router?.history.push(props.to)
    },
    [props.to, router],
  )

  // Callback to preload just the code for the route:
  // we pass this to onMouseEnter, which is a weaker signal
  // that the user *may* navigate to the route.
  const preloadRouteCode = useCallback(() => {
    return router?.preloadCode(props.to)
  }, [props.to, router])

  // Callback to preload the code and data for the route:
  // we pass this to onMouseDown, since this is a stronger
  // signal that the user will likely complete the navigation
  const preloadRoute = useCallback(() => {
    return router?.preload(props.to)
  }, [props.to, router])

  return (
    <a
      href={props.to}
      onClick={changeRoute}
      onMouseEnter={preloadRouteCode}
      onMouseDown={preloadRoute}
    >
      {props.children}
    </a>
  )
}
