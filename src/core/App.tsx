import React, { useEffect, useRef, useState } from 'react';
import { Routes } from 'react-router-dom';
import {
    init,
    getRoutes,
    ComposaicEnv,
    ConfigurationService,
    Navbar,
} from 'composaic';
import { init as initModuleFederation } from '@module-federation/runtime';
import { config } from '../config';
import ErrorBoundary from './ErrorBoundary';
import { loadRemoteModule } from './RemoteModuleLoader';

console.log('config: ' + JSON.stringify(config));

// Initalise Module Federation
const selectedEnv: string = ConfigurationService.getInstance(config).getEnv();
const remotesConfig = config[selectedEnv as ComposaicEnv].remotes;
const transformedRemotes = remotesConfig.map(({ name, host, file }) => ({
    name,
    entry: `${host}/${file}`,
}));
//initModuleFederation({ name: 'host', remotes: transformedRemotes });

// Initalise Plugin Framework
await init({
    config,
    loadRemoteModuleFn: loadRemoteModule,
});

export const App: React.FC = () => {
    const [routes, setRoutes] = useState<JSX.Element[]>([]);
    const menuItemsLoaded = useRef(false);

    useEffect(() => {
        if (!menuItemsLoaded.current) {
            menuItemsLoaded.current = true;
            getRoutes().then((generatedRoutes) => {
                setRoutes(generatedRoutes);
            });
        }
    }, []);
    return (
        <div>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <Navbar />
                <Routes>{routes}</Routes>
            </ErrorBoundary>
        </div>
    );
};
