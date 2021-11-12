import { gql } from "@apollo/client";

export const REPOSITORIES = gql`
  query GetRepositories {
    user(login: "majdi") {
      repositories(first: 100) {
        nodes {
          name
          languages(first: 10) {
            nodes {
              color
              name
            }
          }
          descriptionHTML
          primaryLanguage {
            name
            color
          }
          resourcePath
        }
      }
    }
  }
`;
