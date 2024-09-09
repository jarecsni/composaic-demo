import {
    LoadModuleFunction,
    processManifest,
} from 'composaic/lib/dev/plugin-utils';

export const loadLocalModule = async (moduleName: string, pkg: string) => {
    const module = await import(`../plugins/${pkg}/${moduleName}.ts`);
    return module;
};

export const addLocalPlugins = async (loadModule: LoadModuleFunction) => {
    const response = await fetch('/manifest.json');
    const json = await response.json();
    await processManifest(json, loadModule);
};
