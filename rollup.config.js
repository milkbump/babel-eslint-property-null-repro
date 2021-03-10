import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import path from "path";
import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "index.js",
    output: {
        dir: path.resolve("dist"),
        entryFileNames: "bundle.js",
        format: "esm",
        sourcemap: "inline",
    },
    plugins: [
        resolve({
            browser: true,
            preferBuiltins: true,
        }),
        commonjs(),
        eslint(),
    ],
    watch: {
        clearScreen: false,
    },
    preserveEntrySignatures: false,
};
