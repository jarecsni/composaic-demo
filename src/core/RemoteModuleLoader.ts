
import { RemoteModule } from 'composaic/lib/core/init';

/**
 * Loads a remote module.
 * @param remoteModule - The remote module to load.
 */
export const loadRemoteModule = async (
    remoteModule: RemoteModule
): Promise<object | undefined> => {
    const { url, name, bundleFile, moduleName } = remoteModule;
    return undefined;
};
