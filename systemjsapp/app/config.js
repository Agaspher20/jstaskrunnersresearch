System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "../jspm_packages/npm/*"
  },

  map: {
    "lodash": "npm:lodash@4.17.4"
  }
});
