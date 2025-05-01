import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import { enableScss } from "@remotion/enable-scss";
import { enableTailwind } from "@remotion/tailwind";
import { createRequire } from "node:module";
import { fileURLToPath } from "url";
import webpack from "webpack";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);


if (!process.argv[2])
    throw new Error(
        "No props provided. Use --props {JSON string} to provide props.",
    );
if (process.argv[2] !== "--props")
    throw new Error(
        "Invalid argument. Use --props {JSON string} to provide props.",
    );

const jsonPath = process.argv[3];

if (!jsonPath)
    throw new Error(
        "No JSON path provided. Use --props {JSON file path} to provide props.",
    );

const propsJSON = fs.readFileSync(jsonPath, "utf-8");

const props = JSON.parse(propsJSON);

const fonts = []

Object.values(props.trackItemDetailsMap).forEach(item => {
    if (!item.details?.fontFamily || !item.details?.fontUrl) return
    fonts.push({name: item.details.fontFamily, url: item.details.fontUrl})
})

const bundled = await bundle({
    entryPoint: require.resolve("./src/remotion/index.ts"),
    // outDir: path.resolve(__dirname, "dist"),
    // If you have a webpack override in remotion.config.ts, pass it here as well.
    webpackOverride: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "src"), // Добавляем alias для '@'
        };

        config = enableScss(config);

        config = enableTailwind(config);

        // Добавляем правило для шрифтов
        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[name][ext]'
            }
        });

        // Добавляем плагин для определения шрифтов
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.FONTS': JSON.stringify(fonts)
            })
        );

        config.plugins = [
            ...(config.plugins || []),
            new webpack.ProvidePlugin({
                React: "react", // Автоматически подключаем React
            }),
        ];

        return config;
    },
});

if (!props.trackItemIds || props.trackItemIds.length === 0)
    throw new Error("No trackItemIds provided.");
if (!props.trackItemsMap) throw new Error("No trackItemsMap provided.");
if (!props.trackItemDetailsMap) throw new Error("No trackItemDetailsMap provided.");
if (!props.fps) throw new Error("No fps provided.");
if (!props.width) throw new Error("No width provided.");
if (!props.height) throw new Error("No height provided.");

const inputProps = {
    // fileName: "Superduper",
    // scenes: [],
    // width: 1024,
    // height: 512,
    // fps: 30,
    // musicUrl: "https://music.com/music.mp3" | null,
    // config: { ... }
    ...props,
};

const composition = await selectComposition({
    serveUrl: bundled,
    id: "Timeline",
    inputProps,
});

console.info("Starting to render composition");

await renderMedia({
    codec: "h264",
    composition,
    serveUrl: bundled,
    outputLocation: `/tmp/${props.fileName ?? "Video1"}.mp4`,
    chromiumOptions: {
        enableMultiProcessOnLinux: true,
        viewport: {
            width: props.width,
            height: props.height,
        },
    },
    inputProps,
    timeoutInMilliseconds: 1000 * 60 * 1,
    onProgress: ({ progress }) => {
        console.info(`Progress: ${progress}`);
    },
});

console.info(`Rendered composition ${composition.id}.`);
