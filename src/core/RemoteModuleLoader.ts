import { importRemote } from "module-federation-import-remote";
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

    return importRemote({ url, scope: name, module: moduleName, remoteEntryFileName: bundleFile });
};
