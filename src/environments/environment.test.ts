// Enums
import { EnvName } from '@enums/environment.enum';

// Packages
import packageInfo from '../../package.json';

const scheme = 'http://';
const host   = 'localhost';
const port   = ':5000';
const path   = '/api/test';

const baseUrl = scheme + host + port + path;

export const environment = {
  production      : false,
  version         : packageInfo.version,
  appName         : packageInfo.productName,
  envName         : EnvName.TEST,
  defaultLanguage : 'zh',
  apiBaseUrl      : baseUrl,
};
