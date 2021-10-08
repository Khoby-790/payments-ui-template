import { useMemo } from 'react';
import { useLocation } from 'react-router'
import routes from '../../../Admin/routes';
import { IRoute } from '../../../../type';


const Header = () => {
    const { pathname } = useLocation();
    const route:IRoute = useMemo(() => {
        const route = routes.find(r => r.path === pathname);
        return route ? route : routes[0];
    }, [pathname]);

    return (
        <div className="bg-white p-5 shadow-lg">
            <h1 className="text-5xl">{route?.name}</h1>
            <span className="text-gray-400">{route?.description}</span>
        </div>
    )
}

export default Header
