import mockServer from 'node-mock-server';

mockServer({
  restPath: './internal/mocks/rest',
  dirName: __dirname,
  title: 'Api mock server',
  version: 1,
  urlBase: 'http://localhost:3003',
  urlPath: '/rest/v1',
  port: 3003,
  uiPath: '/',
  headers: {
    'Global-Custom-Header': 'Global-Custom-Header',
  },
});
