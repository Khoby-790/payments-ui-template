

export interface IRoute {
    path: string;
    component: any;
    exact: boolean;
    name?: string;
    description?: string;
    routes?: IRoute[];
}