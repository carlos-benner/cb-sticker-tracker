import { mergeResolvers } from '@graphql-tools/merge'
import StickerResolver from './Sticker.resolver.js';

const mergedResolvers = mergeResolvers([StickerResolver]);     // more resolvers can be added here

export default mergedResolvers;