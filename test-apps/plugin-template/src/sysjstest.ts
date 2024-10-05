
declare global {
    interface Window {
        System: {
            import: (moduleName: string) => Promise<any>;
            addImportMap: (map: { imports: Record<string, string> }) => void;
        }; // Assuming SystemJS is imported or available globally
    }
}

const System = window.System;

export const testIt = async () => {
    const moduleName = 'dayjs';
    const moduleUrl = `https://unpkg.com/${moduleName}@latest`;

    System.addImportMap({
        imports: {
            [moduleName]: moduleUrl
        }
    });

    // Example call to load the module
    loadModule(moduleName).then((module) => {
        // Use the loaded module here
        const dayjs = module.default;
        console.log(`Current date and time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`);
    }).catch((error) => {
        console.error('Error loading module:', error);
    });
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