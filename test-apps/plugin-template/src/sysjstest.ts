
declare global {
    interface Window {
        System: {
            import: (moduleName: string) => Promise<any>;
            addImportMap: (map: { imports: Record<string, string> }) => void;
        }; // Assuming SystemJS is imported or available globally
    }
}
export const dummy = '';
const System = window.System;

export const testIt = async () => {
    const moduleName = '@composaic/sample-plugin';
    const moduleUrl = `https://unpkg.com/@composaic/sample-plugin@0.1.9/dist/index`;

    System.addImportMap({
        imports: {
            [moduleName]: moduleUrl
        }
    });

    // Example call to load the module
    loadModule(moduleName).then((module) => {
        console.log('info about module:');
        Object.keys(module).forEach((key) => {
            console.log(`key: ${key}, value: ${module[key]}`);
        });
        console.log(module['sayHello']('Johnny'))
    }).catch((error) => {
        console.error('Error loading module:', error);
    });

    // const module = 'https://unpkg.com/composaic@0.8.14';
    // import(module).then(module => {
    //     console.log('info about module:');
    //     Object.keys(module).forEach((key) => {
    //         console.log(`key: ${key}, value: ${module[key]}`);
    //     });
    // })

    // const moduleName = 'dayjs';
    // const moduleUrl = `https://unpkg.com/${moduleName}@latest`;

    // System.addImportMap({
    //     imports: {
    //         [moduleName]: moduleUrl
    //     }
    // });

    // // Example call to load the module
    // loadModule(moduleName).then((module) => {
    //     // Use the loaded module here
    //     const dayjs = module.default;
    //     console.log(`Current date and time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`);
    // }).catch((error) => {
    //     console.error('Error loading module:', error);
    // });
};


// Function to dynamically load the module using SystemJS.import
const loadModule = async (moduleName: string) => {
    try {
        const module = await System.import(moduleName);
        console.log(`Successfully loaded module: ${moduleName}`, module);
        return module;
    } catch (error) {
        console.error(`Failed to load module ${moduleName}:`, error);
        throw error;
    }
};