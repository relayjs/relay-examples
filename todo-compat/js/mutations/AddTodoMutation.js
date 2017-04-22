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
  mutation AddTodoMutation($input: AddTodoInput!) {
    addTodo(input:$input) {
      todoEdge {
        __typename
        cursor
        node {
          complete
          id
          text
        }
      }
      viewer {
        id
        totalCount
      }
    }
  }
`;

function getConfigs(userID) {
  return [{
    type: 'RANGE_ADD',
    parentName: 'viewer',
    parentID: userID,
    connectionName: 'todos',
    edgeName: 'todoEdge',
    rangeBehaviors: ({status}) => {
      if (status === 'completed') {
        return 'ignore';
      } else {
        return 'append';
      }
    },
  }];
}

function getOptimisticResponse(text, user) {
  return {
    // FIXME: totalCount gets updated optimistically, but this edge does not
    // get added until the server responds
    todoEdge: {
      node: {
        complete: false,
        text: text,
      },
    },
    viewer: {
      id: user.id,
      totalCount: user.totalCount + 1,
    },
  };
}

function commit(
  environment,
  text,
  user
) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {text}
      },
      configs: getConfigs(user.id),
      optimisticResponse: () => getOptimisticResponse(text, user),
    }
  );
}

export default {commit};
