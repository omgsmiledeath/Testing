import webpack from "webpack";
import { IBuildOptions } from "./types/IBuildOptions";
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options:IBuildOptions):webpack.WebpackPluginInstance[]{
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: options.paths.html
    });
    const miniCSsplug = new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      });

      const progPlug = new webpack.ProgressPlugin()
    return [
        htmlWebpackPlugin, miniCSsplug, progPlug
    ]
}