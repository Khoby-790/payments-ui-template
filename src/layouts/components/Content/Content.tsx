import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../../../pages/Dashboard"));

interface Props {}

const Content = (props: Props) => {
  return (
    <Fragment>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="bg-white p-5 shadow-lg">
          <h1 className="text-5xl">Dashboard</h1>
          <span className="text-gray-400">Overview</span>
        </div>
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
