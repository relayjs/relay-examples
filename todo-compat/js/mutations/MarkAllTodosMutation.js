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

import {
  commitMutation,
  graphql,
} from 'react-relay/compat';

const mutation = graphql`
  mutation MarkAllTodosMutation($input: MarkAllTodosInput!) {
    markAllTodos(input: $input) {
      changedTodos {
        id
        complete
      }
      viewer {
        id
        completedCount
      }
    }
  }
`;

function getConfigs(todos, user) {
  return [{
    type: 'FIELDS_CHANGE',
    fieldIDs: {
      changedTodos: todos.edges.map(({node}) => node.id),
      viewer: user.id,
    },
  }];
}

function getOptimisticResponse(complete, todos, user) {
  const viewerPayload = {id: user.id};
  if (todos && todos.edges) {
    viewerPayload.todos = {
      edges: todos.edges
        .filter(edge => edge.node.complete !== complete)
        .map(edge => ({
          node: {
            complete: complete,
            id: edge.node.id,
          },
        })),
    };
  }
  if (user.totalCount != null) {
    viewerPayload.completedCount = complete ?
      user.totalCount :
      0;
  }
  return {
    viewer: viewerPayload,
  };
}

function commit(
  environment,
  complete,
  todos,
  user,
) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {complete}
      },
      configs: getConfigs(todos, user),
      optimisticResponse: () => getOptimisticResponse(complete, todos, user),
    }
  );
}

export default {commit};
