 - [Project Overview](/internal/docs/PROJECT_OVERVIEW.md)
 - __[Project Configuration](/internal/docs/PROJECT_CONFIG.md)__
 - [Package Script Commands](/internal/docs/PKG_SCRIPTS.md)
 - [Feature Branches](/internal/docs/FEATURE_BRANCHES.md)
 - [Deploy your very own Server Side Rendering React App in 5 easy steps](/internal/docs/DEPLOY_TO_NOW.md)
 - [FAQ](/internal/docs/FAQ.md) 

# Project Configuration

The application configuration has been centralised to live within the `<projectroot>/config` folder.

You read configuration values using the `<projectroot>/config/index.js` helper, and you edit the configuration values in the `<projectroot>/config/values.js` file.

## TOC

 - [Background and Usage](#background-and-usage)
 - [Declaring the configuration values that are safe for client bundles](#declaring-the-configuration-values-that-are-safe-for-client-bundles)
 - [Environment Specific Values](#environment-specifc-values)

## Background and Usage

Below are some of the problems that we faced, and how we ended up with our current implementation...

As this is a universal application you are mostly creating code that is shared between your "client" and "server" bundles. The "client" is sent across the wire to be executed in the browser therefore you have to be extra careful in what you include in the bundle.  Webpack by default bundles code if it is imported by your target entry file (or it's dependencies). Therefore if you were to import the application configuration values within a module, the entire application configuration would be included with your "client" bundle. This is extremely risky as the configuration exposes the internal structure of your application and may contain sensitive data such as database connection strings.

One possible solution to the above would be to use Webpack's `DefinePlugin` in order to statically inject/replace only the required configuration values into our client bundle.  However, these configuration values are statically bound during our build step, meaning that we are unable to expose execution time provided values (e.g. `FOO=bar npm run start`) to our client bundle. Therefore we decided on a strategy of making the server be responsible for attaching a configuration object to `window.__CLIENT_CONFIG__` within the HTML response that gets sent to the browser.  This would then allow us to ensure that environment variables can be properly exposed. This works well, however, it introduces a new problem, we want a unified API to read configuration values without having to figure out if the code is in a browser/server context.

For this we created a helper function in the root of the `config` folder.  It is located in `<projectroot>/config/index.js`.  You can use it like so:

```js
import config from '../config';

export function MyComponent() {
  return <h1>{config('welcomeMessage')}</h1>;
}
```

The `config` helper allows you to specify nested path structures in the form of a dot-notated string or array. For example the following resolve to the same config value:

```js
config('messages.welcome');
config(['messages', 'welcome']);
```

The `config` helper is also configured to throw helpful error messages when trying to request configuration values that either do not exist or have not been exposed to the client bundles.

## Declaring the configuration values that are safe for client bundles

Within the centralised config (`<projectroot>/config/values.js`) you will see that a `clientConfigFilter` property.  This value is a ruleset/filter that details which of the configuration values you deem required (and safe) for inclusion within your client bundles.  Please go to this section of the configuration file for more detail on how this filtering mechanism works.

When a server request is being processed this filtering configuration export will be serialised and attached to the `window.__CLIENT_CONFIG__` within the HTML response, thereby allowing our browser executed code to have access to the respective configuration values.

## Environment Specific Values

Because configuration using safely node-config you can override each of value using environment variable. See https://github.com/lorenwest/node-config/wiki/Environment-Variables for more information.
