import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder; // название папки с результатом
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/assets/img/`,
        files: `${buildFolder}/assets/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/script.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/fonts/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${ srcFolder }/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${ srcFolder }/fonts/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}