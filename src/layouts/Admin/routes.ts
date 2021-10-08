import { lazy } from "react";
import { IRoute } from "../../type";
import { HomeIcon, CalendarIcon, UserGroupIcon, FolderIcon } from '@heroicons/react/outline'
// import pages here
const Dashoard = lazy(() => import("../../pages/Dashboard"));
const Disputes = lazy(() => import("../../pages/Disputes"));
const Profiles = lazy(() => import("../../pages/Profiles"))
const Revenue = lazy(() => import("../../pages/Revenue"));
// add the pages to the routes array
const routes: IRoute[] = [
    {
        path: '/',
        component: Dashoard,
        exact: true,
        name: 'Dashboard',
        description: 'Overview',
        icon: HomeIcon
    },
    {
        path: '/disputes',
        component: Disputes,
        icon: CalendarIcon,
        exact: true,
        name: 'Disputes',
        description: 'Disputes section',
    },
    {
        path: '/user-profiles',
        component: Profiles,
        exact: true,
        name: 'User Profiles',
        description: 'User profiles section',
        icon: UserGroupIcon
    },
    {
        path: '/revenue',
        component: Revenue,
        exact: true,
        name: 'Revenue',
        description: 'Revenue section',
        icon: FolderIcon
    }
]


export default routes;