import RoutingContext from './RoutingContext';
import React from 'react';

const { useCallback, useContext } = React;

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
export default function Link(props) {
  const router = useContext(RoutingContext);
  const { history } = router;
  const onClick = useCallback(
    event => {
      event.preventDefault();
      history.push(props.to);
    },
    [props.to, history],
  );
  return (
    <a href={props.to} onClick={onClick}>
      {props.children}
    </a>
  );
}
