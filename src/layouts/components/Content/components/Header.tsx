import { useMemo } from 'react';
import { useLocation } from 'react-router'
import routes from '../../../Admin/routes';
import { IRoute } from '../../../../type';
import TextTransition, { presets } from "react-text-transition";


const Header = () => {
    const { pathname } = useLocation();
    const route: IRoute = useMemo(() => {
        const route = routes.find(r => r.path === pathname);
        return route ? route : routes[0];
    }, [pathname]);

    return (
        <div className="bg-white p-5 shadow-lg">
            <h1 className="text-5xl">
                <TextTransition
                    text={route?.name ?? ""}
                    springConfig={presets.wobbly}
                />
            </h1>
            <span className="text-gray-400">
                <TextTransition
                    text={route?.description ?? ""}
                    springConfig={presets.wobbly}
                    delay={100}
                />
            </span>
        </div>
    )
}

export default Header
