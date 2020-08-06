import React from "react";
import "./App.css";
import Header from "./components/Header";
import Comics from "./containers/Comics";
import Main from "./containers/Main";
import CharacterComics from "./containers/CharacterComics";
import Favorites from "./containers/Favorites";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/comics">
                        <Comics />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/charactercomics">
                        <CharacterComics />
                    </Route>
                    <Route path="/character">
                        <Main />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
