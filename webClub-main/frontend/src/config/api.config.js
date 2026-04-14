// Configuración de la API según variables de entorno (Vite).
const isDevelopment = import.meta.env.MODE === 'development';

const devURL = import.meta.env.VITE_API_URL_DEV;
const prodURL = import.meta.env.VITE_API_URL_PROD;
const timeout = Number(import.meta.env.VITE_API_TIMEOUT);

if (!devURL || !prodURL) {
  throw new Error('Faltan variables requeridas: VITE_API_URL_DEV o VITE_API_URL_PROD');
}

if (!Number.isFinite(timeout) || timeout <= 0) {
  throw new Error('VITE_API_TIMEOUT debe ser un numero positivo');
}

const baseURL = isDevelopment ? devURL : prodURL;

export const currentConfig = {
  baseURL,
  timeout
};

// Exportar la URL base para uso directo
export const API_BASE_URL = currentConfig.baseURL;

// Configuración completa para axios
export const axiosConfig = {
  baseURL: currentConfig.baseURL,
  timeout: currentConfig.timeout,
  headers: {
    'Content-Type': 'application/json'
  }
};
