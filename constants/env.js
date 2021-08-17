import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const CURRENT_ENV = publicRuntimeConfig.ENV || null;
const CURRENT_API = publicRuntimeConfig.API || null;
const CURRENT_HOST = publicRuntimeConfig.HOST || null;
const BASE_URL = CURRENT_HOST;
const LOGO = `https://res.cloudinary.com/dsxlujoww/image/upload/v1628741405/bonjek_84c7ea5d2e.svg`;

export default ENV = {
  CURRENT_ENV,
  CURRENT_API,
  CURRENT_HOST,
  BASE_URL,
  LOGO,
}