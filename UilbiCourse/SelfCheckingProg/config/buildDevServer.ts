import path from "path";
import {IBuildOptions } from "./types/IBuildOptions";
import * as webpackDevServer from 'webpack-dev-server';


export function buildDevServer({port}:IBuildOptions):webpackDevServer.Configuration{
    return {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
        port: port,
        open:true,
    }
}