import { ApolloServer, gql } from 'apollo-server-micro';
import { v4 as uuidv4 } from 'uuid';

const stickers = [
  { id: uuidv4(), name: 'Sticker 1', description: 'This is sticker 1',  },
  { id: uuidv4(), name: 'Sticker 2', description: 'This is sticker 2' }
];

const typeDefs = gql`
  type Sticker {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    stickers: [Sticker!]!
  }

  type Mutation {
    addSticker(name: String!, description: String!): Sticker
  }
`;

const resolvers = {
  Query: {
    stickers: () => stickers,
  },
  Mutation: {
    addSticker: (_: any, { name, description }: { name: string, description: string }) => {
      const newSticker = { id: uuidv4(), name, description };
      stickers.push(newSticker);
      return newSticker;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });