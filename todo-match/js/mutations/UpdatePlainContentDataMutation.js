// @flow
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
  type Disposable,
  type Environment,
} from 'react-relay';

import type {
  UpdatePlainContentDataInput,
  UpdatePlainContentDataMutationResponse,
} from 'relay/UpdatePlainContentDataMutation.graphql';

const mutation = graphql`
  mutation UpdatePlainContentDataMutation(
    $input: UpdatePlainContentDataInput!
  ) {
    updatePlainContentData(input: $input) {
      plainContentData {
        id
        plainText
      }
    }
  }
`;

function getOptimisticResponse(
  text: string,
  id: string,
): UpdatePlainContentDataMutationResponse {
  return {
    updatePlainContentData: {
      plainContentData: {
        id: id,
        plainText: text,
      },
    },
  };
}

function commit(
  environment: Environment,
  text: string,
  id: string,
): Disposable {
  const input: UpdatePlainContentDataInput = {
    text,
    id: id,
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input,
    },
    optimisticResponse: getOptimisticResponse(text, id),
  });
}

export default {commit};
