import React from 'react';
import MatchContainer from 'react-relay/lib/relay-hooks/MatchContainer';
import moduleLoader from '../lib/moduleLoader';
import ErrorBoundary from './ErrorBoundary';
import {Button} from './LayoutComponents';

export default function RelayMatchContainer({match}: {match: unknown}) {
  return (
    <ErrorBoundary
      shouldCatchError={(error) => error instanceof ModuleLoaderError}
      renderError={(error, resetError) => (
        <div className="bg-red-200 rounded-md px-2 py-1 inline-block">
          Failed to load {(error as ModuleLoaderError).moduleLoaderName}{' '}
          <Button
            size="small"
            onClick={() => {
              moduleLoader(
                (error as ModuleLoaderError).moduleLoaderName,
              ).resetError();
              resetError();
            }}>
            Reload
          </Button>
        </div>
      )}>
      <MatchContainer
        match={match}
        loader={(name: string) => {
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
  moduleLoaderName: string;
  override cause: Error;

  constructor(moduleLoaderName: string, error: Error) {
    super('ModuleLoaderError: ' + error.message);
    this.moduleLoaderName = moduleLoaderName;
    this.cause = error;
  }
}
