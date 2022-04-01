import MatchContainer from 'react-relay/lib/relay-hooks/MatchContainer';
import moduleLoader from '../lib/moduleLoader';

export default function RelayMatchContainer({match}) {
  return (
    <MatchContainer
      match={match}
      loader={(name) => {
        const loader = moduleLoader(name);
        const module = loader.get();
        if (module != null) {
          return module;
        }
        throw loader.load();
      }}
    />
  );
}
