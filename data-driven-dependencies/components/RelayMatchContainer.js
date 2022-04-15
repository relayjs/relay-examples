import React from 'react';
import MatchContainer from 'react-relay/lib/relay-hooks/MatchContainer';
import moduleLoader from '../lib/moduleLoader';
import ErrorBoundary from './ErrorBoundary';
import {Button} from './LayoutComponents';

export default function RelayMatchContainer({match}) {
  return (
    <ErrorBoundary
      shouldCatchError={(error) => error instanceof ModuleLoaderError}
      renderError={(error, resetError) => (
        <div className="bg-red-200 rounded-md px-2 py-1 inline-block">
          Failed to load {error.moduleLoaderName}{' '}
          <Button
            size="small"
            onClick={() => {
              moduleLoader(error.moduleLoaderName).resetError();
              resetError();
            }}>
            Reload
          </Button>
        </div>
      )}>
      <MatchContainer
        match={match}
        loader={(name) => {
          const loader = moduleLoader(name);
          const error = loader.getError();
          if (error) {
            throw new ModuleLoaderError(name, error);
          }
          const module = loader.get();
          if (module != null) {
            return module;
          }
          throw loader.load();
        }}
      />
    </ErrorBoundary>
  );
}

class ModuleLoaderError extends Error {
  constructor(moduleLoaderName, error) {
    super('ModuleLoaderError: ' + error.message);
    this.moduleLoaderName = moduleLoaderName;
    this.error = error;
  }
}
