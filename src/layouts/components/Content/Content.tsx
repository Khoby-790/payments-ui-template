import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../Admin/routes";
import Header from "./components/Header";


interface Props {}

const Content = (props: Props) => {
  return (
    <Fragment>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <Header />
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Suspense>
      </main>
    </Fragment>
  );
};

export default Content;
