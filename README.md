# AngularElectronInstall

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build && run
 npm run start:electron

## Build one file "asar"

"What exactly happening here is that angular-cli is outputting build files in the dist folder. Electron builder is also outputting its files in the dist folder.

First thing I want clarify here is that If you run npm run dist electron builder is not going to build files for us.

So first you need to build files running ng build.

second you need to make changes in the package.json specifying build resources to make use of build files and you need to change electron-builder's output directory. " https://stackoverflow.com/questions/51492003/building-electron-application-with-electron-builder-in-angular-5

->package.json

"build":{
...
   "files": ["**/*", "dist/**/*"],

  "directories": {
      "output": "release",
      "buildResources": "dist"
    },
    "asar":true,
    ...

->angular.json
...
 "build": {
            ...
          "options": {
            "outputPath": "dist",
            ...
