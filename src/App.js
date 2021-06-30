import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlbumPage from "./components/album/album";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AlbumPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
