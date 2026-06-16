'use client';

import {useMemo, Suspense} from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import {createEnvironment} from '../lib/relay/environment';

export function RelayProvider({children}) {
  const environment = useMemo(() => createEnvironment(), []);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={null}>{children}</Suspense>
    </RelayEnvironmentProvider>
  );
}
