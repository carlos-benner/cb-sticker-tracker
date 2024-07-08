import { mergeTypeDefs } from '@graphql-tools/merge';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchema } from '@graphql-tools/load'

const schema = await loadSchema('./**/*.graphql', {
    // load files and merge them into a single schema object
    loaders: [new GraphQLFileLoader()]
  })
const mergedTypeDefs = mergeTypeDefs([schema]); // more TypeDefs can be added here

export default mergedTypeDefs;