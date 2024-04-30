import gql from 'graphql-tag';

const typeDefs = gql`
  # Schema definitions go here

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    autor: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
`;

export default typeDefs;