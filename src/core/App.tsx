import React, { useEffect, useRef, useState } from 'react';
import { Routes } from 'react-router-dom';
import { Navbar } from 'composaic/lib/core/menu/Navbar';
import { init } from 'composaic/lib/core/init';
import { getRoutes } from 'composaic/lib/core/menu/menu-utils';
import { config } from '../config';
import ErrorBoundary from './ErrorBoundary';
import { loadRemoteModule } from './RemoteModuleLoader';

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
