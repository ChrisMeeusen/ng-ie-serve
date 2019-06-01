## ng-ie-serve
Ths is a simple nodejs script that will make the necessary changes in an angular project to enable running ```ng serve``` targeting es5 bundles, so 
you can do local development against Internet Explorer (because we all know that just because it works and looks good in chrome doesn't mean
IE will be happy).

To use this script first install it:

``` npm i -D ng-ie-serve```

Then execute this command from your angular project's root directory (same directory that contains your package.json file)

```ng-ie-serve```

If you want to update a project other than the default project pass the --project param like so

```ng-ie-serve --project=my-ng-project-here```

You should see a success message once the script completes and you should be able to run this command to transpile and serve your project using es5 bundles which
will work in IE and chrome.

```npm run serve:ie``` if you didn't provide a project name
```npm run serve:my-ng-project-here:ie``` if you provided a project name

🦄 🍔
