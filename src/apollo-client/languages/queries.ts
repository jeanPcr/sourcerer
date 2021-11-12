import { gql } from "@apollo/client";

export const LANGUAGES = gql`
  query GetLANGUAGES {
    repositoryOwner(login: "majdi") {
      id
      repositories(first: 100) {
        nodes {
          primaryLanguage {
            color
            name
          }
          name
        }
      }
    }
  }
`;
