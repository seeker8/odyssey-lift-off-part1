import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers.js';
import { TrackAPI } from './datasources/track-api.js';
// these imports are used to setup mocked response
// import { addMocksToSchema } from '@graphql-tools/mock';
// import { makeExecutableSchema } from '@graphql-tools/schema';
// import { mocks } from './mocks.js';
import { typeDefs } from "./schema.js";

async function startApolloServer() {
    // this setup mocks
    // const server = new ApolloServer({ 
    //     schema: addMocksToSchema({
    //         schema: makeExecutableSchema({ typeDefs }),
    //         mocks
    //     })
    //  });

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    trackAPI: new TrackAPI({ cache })
                }
            };
        }
    });
    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
    `);
}

startApolloServer();