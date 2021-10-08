import { lazy } from "react";
import { IRoute } from "../../type";
// import pages here
const Dashoard = lazy(() => import("../../pages/Dashboard"));
const Disputes = lazy(() => import("../../pages/Disputes"));
const Profiles = lazy(() => import("../../pages/Profiles"))

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
    },
    {
        path: '/user-profiles',
        component: Profiles,
        exact: true,
    }
]


export default routes;