import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.ts', // Entry point of your library
    output: {
        dir: 'dist', // Output directory    
        format: 'system', // SystemJS format
        sourcemap: true, // Generate source map
    },
    plugins: [
        resolve(), // Resolve node_modules
        typescript(), // Compile TypeScript
        postcss({
            extensions: ['.scss'],
            extract: true, // Extract CSS to a separate file
            minimize: true, // Minify the CSS
        }),
        terser() // Minify the output
    ],
    external: [
        'react', // Mark react as external
        'react-dom' // Mark react-dom as external
    ]
};