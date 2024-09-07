import {
    __federation_method_getRemote,
    __federation_method_setRemote,
    // @ts-expect-error: this is a private API
} from '__federation__';
import { RemoteModule } from 'composaic/lib/core/init';

/**
 * Loads a remote module.
 * @param remoteModule - The remote module to load.
 */
export const loadRemoteModule = async (
    remoteModule: RemoteModule
): Promise<object | undefined> => {
    const { url, name, bundleFile, moduleName } = remoteModule;
    __federation_method_setRemote(name, {
        url: () => Promise.resolve(`${remoteModule.url}/assets/${bundleFile}`),
        format: 'esm',
        from: 'vite',
    });
    try {
        const module = await __federation_method_getRemote(name, moduleName);
        return module;
    } catch (error) {
        console.error(
            `[composaic] Error fetching remote plugin module ${moduleName}, url=${url}, name=${name} : ${error}`
        );
        return undefined;
    }
};
