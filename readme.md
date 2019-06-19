## ng-ie-serve
Ths is a simple nodejs script that will make the necessary changes in an angular project to enable running ```ng serve``` targeting es5 bundles, so 
you can do local development against Internet Explorer.

You can install this package globally like so

```npm i -g ng-ie-serve``` then run this from your angular project root directory:  ```ng-ie-serve --project=my-project-here``` (project parameter is optional)

Or you may use this package without installing globally by using ```npx```

```npx ng-ie-serve``` from your angular project root directory.

**You cannot just install this as a dev dependency as previous versions have stated.  It must be installed globally or used through npx.**

If the script ran successfully you'll see this message:

```$xslt
C:\junk\test-prj>npx ng-ie-serve
npx: installed 1 in 2.217s
*** no project name provided using default project: test-prj
*** updated browerslist file... ***
*** added tsconfig.es5.json file... ***
*** updated angular.json file... ***
*** updated package.json file... ***
*** Success ***
*** Run "npm run start:ie" to serve for IE ***
```

```npm run start:ie``` if you didn't provide a project name

```npm run start:my-ng-project-here:ie``` if you provided a project name

🦄 🍔
