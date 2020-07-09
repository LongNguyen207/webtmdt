import React from 'react';
import Home from './Home/index';
import MakeUpFace from './MakeUpFace/index';
import { Switch, Route } from "react-router-dom";
// import { routes } from './../../Router/router';

class Content extends React.Component {
    render() {
        return (
            <div className="content-container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/makeupface">
                        <MakeUpFace />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Content;