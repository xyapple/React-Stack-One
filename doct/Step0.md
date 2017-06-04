##Setup the npm and Webpack
* Step 1: load npm and create a package.json file
```
$ npm init
```
* Step 2: install webpack
```
$ npm install webpack webpack-dev-server --save-dev
```
Inside package.json
```
"devDependencies": {
  "webpack": "^2.6.1",
  "webpack-dev-server": "^2.4.5"
}
```
* Step 3: install react
```
$ npm install react react-dom --save
```
Inside package.json
```
"dependencies": {
  "react": "^15.5.4",
  "react-dom": "^15.5.4"
}
```
## devDependencies Vs. dependencies
* devDependencies is development dependencies like babel and webpack
* dependencies is like react and react-dom which will make sure the application run.
