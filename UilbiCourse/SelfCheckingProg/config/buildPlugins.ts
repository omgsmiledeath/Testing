import webpack from "webpack";
import { IBuildOptions } from "./types/IBuildOptions";
import HtmlWebpackPlugin  from 'html-webpack-plugin';

export function buildPlugins(options:IBuildOptions):webpack.WebpackPluginInstance[]{
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: options.paths.html
    });
    return [
        htmlWebpackPlugin
    ]
}