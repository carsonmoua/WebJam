import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import WebJamList from "./components/web.component";
import EditWebJam from "./components/edit.component";
import CreatetWebJam from "./components/create.component";
import CreateUser from "./components/users.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component = {WebJamList} />
      <Route path="/edit/:id" component={EditWebJam} />
      <Route path="/create" component={CreatetWebJam} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
