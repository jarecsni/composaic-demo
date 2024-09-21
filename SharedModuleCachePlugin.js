const webpack = require('webpack');
const webpackSources = require('webpack-sources');
const { OriginalSource, ConcatSource } = webpackSources;

const RuntimeGlobals = require('webpack/lib/RuntimeGlobals');

const { Template } = webpack;
const { JavascriptModulesPlugin } = webpack.javascript;

const PLUGIN_NAME = "SharedModuleCachePlugin";

module.exports = class SharedModuleCachePlugin {
    constructor(options = {}) {
        this.cacheVar = options.cacheVar || "__shared_module_cache__";
    }

    apply(compiler) {
        compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
            const compilationHooks = JavascriptModulesPlugin.getCompilationHooks(compilation);
            compilationHooks.renderStartup.tap(PLUGIN_NAME, startupSource => {
                const cacheCode = Template.asString([
                    "if (typeof window !== 'undefined') {",
                    Template.indent([
                        `if (!window.${this.cacheVar}) {`,
                        Template.indent(`window.${this.cacheVar} = {};`),
                        "}",
                        "",
                        `__webpack_module_cache__ = window.${this.cacheVar};`,
                        `${RuntimeGlobals.moduleCache} = window.${this.cacheVar};`,
                    ]),
                    "}",
                ]);
                const cacheSource = new OriginalSource(cacheCode, "webpack/shared-module-cache");
                return new ConcatSource(cacheSource, startupSource);
            });
        });
    }
}