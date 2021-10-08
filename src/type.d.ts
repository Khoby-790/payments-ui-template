import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";


export interface IRoute {
    path: string;
    component: any;
    exact: boolean;
    name?: string;
    description?: string;
    routes?: IRoute[];
    icon?: ReactNode;
}