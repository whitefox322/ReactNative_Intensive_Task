declare module "react-hot-loader";

interface RequireImport {
    default: any;
}

// stubs to enable load resources from modules

interface NodeModule {
    hot: any;
}

declare module "*.png" {
    const value: any;
    export = value;
}
declare module "*.jpg" {
    const value: any;
    export = value;
}
declare module "*.jpeg" {
    const value: any;
    export = value;
}
declare module "*.gif" {
    const value: any;
    export = value;
}
declare module "*.svg" {
    const value: any;
    export = value;
}
declare module "*.json" {
    const value: any;
    export = value;
}