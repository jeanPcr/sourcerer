import { gql } from "@apollo/client";

export const PROFILE = gql`
  query GetExchangeRates {
    user(login: "majdi") {
      id
      login
      bio
      avatarUrl
      company
      followers {
        totalCount
      }
      following {
        totalCount
      }
      name
      repositories(first: 100) {
        totalCount
        nodes {
          defaultBranchRef {
            target {
              ... on Commit {
                id
                message
              }
            }
          }
        }
      }
      organization(login: "Mhirba") {
        location
      }
    }
  }
`;
