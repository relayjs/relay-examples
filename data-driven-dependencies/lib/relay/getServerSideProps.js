import {networkFetch} from './network';

export async function getPreloadedQuery({params}, variables) {
  const response = await networkFetch(params.id, variables);
  return {
    params,
    variables,
    response,
  };
}
