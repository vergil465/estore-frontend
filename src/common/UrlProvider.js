const {
  NODE_ENV: environment,
} = process.env;

const BACKEND_URL = {
  production: 'https://estore-boot.herokuapp.com',
  development: 'http://localhost:8080',
};

export default class UrlProvider {
  static getApiPath(inputPath) {
    return `${BACKEND_URL[environment]}/api/${inputPath}`;
  }

  static getPath(inputPath) {
    return `${BACKEND_URL[environment]}/${inputPath}/`;
  }
}
