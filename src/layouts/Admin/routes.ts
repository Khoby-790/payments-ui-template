import { lazy } from "react";
import { IRoute } from "../../type";
import React from 'react'
// import pages here
const Dashoard = lazy(() => import("../../pages/Dashboard"));
const Disputes = lazy(() => import("../../pages/Disputes"));

// add the pages to the routes array
const routes: IRoute[] = [
    {
        path: '/',
        component: Dashoard,
        exact: true,
    },
    {
        path: '/disputes',
        component: Disputes,
        exact: true,
    }
]


export default routes;