declare module 'clean-webpack-plugin';
declare module 'uglifyjs-webpack-plugin';
declare module 'webpack-bundle-analyzer';

declare module '*.jpeg' {
    const resource: any;
    export default resource;
}

declare module '*.jpg' {
    const resource: any;
    export default resource;
}

declare module '*.less' {
    const resource: { [key: string]: string };
    export default resource;
}
