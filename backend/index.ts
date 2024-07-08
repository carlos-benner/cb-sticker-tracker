import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import mergedTypeDefs from './Types/index.js';
import mergedResolvers from './Resolvers/index.js';

const server = new ApolloServer({
	typeDefs: mergedTypeDefs,
	resolvers: mergedResolvers,
});

const { url } = await startStandaloneServer(server, {listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`)
