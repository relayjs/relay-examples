import {printSchema} from 'graphql';

import {schema} from './graphql.mjs';

console.log("# @generated\n\n" + printSchema(schema));
