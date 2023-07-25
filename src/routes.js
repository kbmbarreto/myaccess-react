import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Passwords from "./pages/passwords";
import NewUser from "./pages/newuser";
import NewPassword from "./pages/newpassword";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/passwords" exact component={Passwords} />
                <Route path="/passwords/new/:passwordId" component={NewPassword} />
                <Route path="/new/user" component={NewUser} />
            </Switch>
        </BrowserRouter>
    );
}