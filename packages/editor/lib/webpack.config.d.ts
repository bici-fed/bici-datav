export const mode: string;
export const entry: string;
export namespace output {
    const filename: string;
    const path: string;
    const library: string;
    const libraryTarget: string;
}
export namespace module {
    const rules: ({
        test: RegExp;
        use: string;
        exclude: RegExp;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                lessOptions: {
                    modifyVars: {
                        "@ant-prefix": string;
                    };
                    javascriptEnabled: boolean;
                };
            };
        })[];
        exclude?: undefined;
    } | {
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                presets: string[];
            };
        };
    } | {
        test: RegExp;
        use: {
            loader: string;
            options: {
                limit: number;
                name: string;
            };
        }[];
        exclude?: undefined;
    } | {
        test: RegExp;
        use: {
            loader: string;
            options: {
                name: string;
                outputPath: string;
            };
        }[];
        exclude?: undefined;
    })[];
}
export const plugins: any[];
export namespace resolve {
    namespace alias {
        const components: string;
    }
    const extensions: string[];
}
export const externals: string[];
