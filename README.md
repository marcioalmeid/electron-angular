# AngularElectronInstall

## Dependencies
npm install --save-dev electron@latest
npm install --save-dev electron-builder@latest

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
