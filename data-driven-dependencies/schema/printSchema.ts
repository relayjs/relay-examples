import {printSchema} from 'graphql';
import fs from 'fs';

import {schema} from '../lib/graphql';

const text = printSchema(schema);

fs.writeFileSync('./schema/schema.graphql', text, 'utf8');

console.log('Schema updated!');
