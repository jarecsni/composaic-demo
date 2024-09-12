
import { RemoteModule } from 'composaic/lib/core/init';

// https://www.npmjs.com/package/module-federation-import-remote

/**
 * Loads a remote module.
 * @param remoteModule - The remote module to load.
 */
export const loadRemoteModule = async (
    remoteModule: RemoteModule
): Promise<unknown | undefined> => {
    const { url, name, bundleFile, moduleName } = remoteModule;

    // url + bundleFile = full path to the bundle file
    // scope = name
    // module = moduleName
    const scope = name;

    await __webpack_init_sharing__("default");
    const container = (window as Window)[scope] as WebPackContainer; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await ((window as Window)[scope] as WebPackContainer).get(moduleName);
    const Module = factory();
    return Module;
};
