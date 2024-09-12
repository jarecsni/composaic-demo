declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare const __webpack_init_sharing__: (scope: string) => void;

declare interface WebPackContainer {
    init: (shareScope: string) => Promise<void>;
    get: (module: string) => Promise<() => unknown>;
}

declare interface Window { [key: string]: unknown };

declare const __webpack_share_scopes__: { default: string };