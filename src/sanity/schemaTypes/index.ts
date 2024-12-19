import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { pageType } from "./pageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, pageType],
};
