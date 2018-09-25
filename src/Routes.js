import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Components/Main/Main";

const Routes = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default Routes;
