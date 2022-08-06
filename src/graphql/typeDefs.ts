import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    test: String
  }
`;
export default typeDefs;
