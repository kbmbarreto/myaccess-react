import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Passwords from "./pages/passwords";
import NewPassword from "./pages/newpassword";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/passwords" exact component={Passwords} />
                <Route path="/passwords/new" exact component={NewPassword} />
            </Switch>
        </BrowserRouter>
    );
}