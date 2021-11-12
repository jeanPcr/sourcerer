import React, { useEffect } from "react";
import "./App.css";
//APOLLO
import { useQuery } from "@apollo/client";
import { PROFILE } from "./apollo-client/profile/queries";
import { REPOSITORIES } from "./apollo-client/repositories/queries";
//CONTEXTS
import { useUser } from "./contexts/user.context";
//COMPONENTS
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Overview from "./components/overview/Overview";
import Languages from "./components/languages/Languages";
import Repositories from "./components/repositories/Repositories";
import FunFacts from "./components/funFacts/FunFacts";

function App() {
  const { loading, error, data } = useQuery(PROFILE);
  const { currentUser, setCurrentUser } = useUser();

  useEffect(() => {
    if (data) {
      setCurrentUser(data.user);
    }
  }, [data]);

  return (
    <div className="App">
      <Header />
      <Profile />
      <Overview />
      <Languages />
      <FunFacts />
      <Repositories />
    </div>
  );
}

export default App;
