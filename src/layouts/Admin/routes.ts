import { lazy } from "react";
import { IRoute } from "../../type";
import React from 'react'
// import pages here
const Dashoard = lazy(() => import("../../pages/Dashboard"));
const Disputes = lazy(() => import("../../pages/Disputes"));
const Revenue = lazy(() => import("../../pages/Revenue"));
// add the pages to the routes array
const routes: IRoute[] = [
    {
        path: '/',
        component: Dashoard,
        exact: true,
        name: 'Dashboard',
        description: 'Overview',
    },
    {
        path: '/disputes',
        component: Disputes,
        exact: true,
        name: 'Disputes',
        description: 'Disputes section',
    },
    {
        path: '/revenue',
        component: Revenue,
        exact: true,
        name: 'Revenue',
        description: 'Revenue section',
    }
]


export default routes;