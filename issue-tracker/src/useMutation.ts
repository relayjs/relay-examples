import { useState, useRef, useCallback, useEffect } from 'react';
import { GraphQLTaggedNode } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';
import {
  MutationConfig,
  MutationParameters,
  commitMutation,
  Disposable,
} from 'relay-runtime';

type CustomMutationConfig<TOperationType extends MutationParameters> = Omit<
  MutationConfig<TOperationType>,
  'mutation'
>;

export default function useMutation<TOperationType extends MutationParameters>(
  mutation: GraphQLTaggedNode,
): [boolean, (config?: CustomMutationConfig<TOperationType>) => void] {
  const environment = useRelayEnvironment();
  const [isPending, setPending] = useState(false);
  const requestRef = useRef<Disposable | null>(null);
  const mountedRef = useRef(false);

  const execute = useCallback(
    (config: CustomMutationConfig<TOperationType> = { variables: {} }) => {
      if (requestRef.current != null) return;

      const request = commitMutation(environment, {
        ...config,
        mutation,
        onCompleted: (response, errors) => {
          if (!mountedRef.current) {
            return;
          }

          requestRef.current = null;
          setPending(false);
          config.onCompleted && config.onCompleted(response, errors);
        },
        onError: error => {
          console.error(error);
          if (!mountedRef.current) return;

          requestRef.current = null;
          setPending(false);
          config.onError && config.onError(error);
        },
      });

      requestRef.current = request;
      setPending(true);
    },
    [environment, mutation],
  );

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return [isPending, execute];
}
