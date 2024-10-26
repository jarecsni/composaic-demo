export const config = {
    dev: {
        remotes: [
            {
                name: 'TestPlugins',
                host: 'http://localhost:9000',
                file: 'TestPlugins.js'
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