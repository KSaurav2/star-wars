import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import SignIn from "./SignIn";
import Appbar from './Appbar';
import Home from "./Home";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  if(!authTokens && sessionStorage.getItem("tokens")) {
    setAuthTokens(sessionStorage.getItem("tokens"));
  }
  
  const setTokens = (data) => {
    sessionStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Appbar />
          <Route exact path="/" component={SignIn} />
          <Route path="/login" component={SignIn} />
          <PrivateRoute path="/home" component={Home} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;