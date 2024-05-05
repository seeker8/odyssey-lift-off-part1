import gql from 'graphql-tag';

export const typeDefs = gql`
  # Schema definitions go here

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The tracks's complete array of Modules"
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Modules's title"
    title: String!
    "The Module's length in minutes"
    length: Int
    "The Module's content description"
    content: String
    "The Module's video url"
    videoUrl: String
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
    "Fetch a specific module, provided a module's ID"
    module(id: ID!): Module
  }
`;
