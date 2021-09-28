import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../../../pages/Dashboard"));

interface Props {}

const Content = (props: Props) => {
  return (
    <Fragment>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Suspense>
      </main>
    </Fragment>
  );
};

export default Content;
