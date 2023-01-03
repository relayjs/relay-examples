import { printSchema } from "graphql";

import { schema } from "./schema.mjs";

console.log(
  "# @generated\n# run `yarn print-schema` to re-generate this file.\n\n" +
    printSchema(schema)
);
