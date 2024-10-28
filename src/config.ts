export const config = {
    dev: {
        remotes: [
            {
                name: 'TestPlugins',
                host: 'http://localhost:9000',
                file: 'TestPlugins.js'
            },
            {
                name: 'TestPluginOne',
                host: 'http://localhost:9001',
                file: 'TestPluginOne.js'
            },
        ],
    },
    prd: {
        remotes: [
            {
                name: 'TestPlugins',
                host: 'http://localhost:4000/testplugins',
                file: 'TestPlugins.js'
            },
        ],
    }
};