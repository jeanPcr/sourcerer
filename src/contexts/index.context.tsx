import { UserProvider } from "./user.context";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client";

const Providers = (props: any) => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>{props.children}</UserProvider>
    </ApolloProvider>
  );
};
export default Providers;
