// Enums
import { EnvName } from '@enums/environment.enum';

// Packages
import packageInfo from '../../package.json';

export const environment = {
  production      : true,
  version         : packageInfo.version,
  appName         : packageInfo.productName,
  envName         : EnvName.PROD,
  defaultLanguage : 'zh',
  apiBaseUrl      : `${location.protocol}//${location.host}`,
};
