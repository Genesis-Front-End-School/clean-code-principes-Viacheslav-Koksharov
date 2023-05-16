// hls.js
import Hls from 'hls.js';
const HLS_IS_SUPPORTED = Hls.isSupported();

// API
const BASE_URL = 'https://api.wisey.app/api/v1';
const TOKEN_URL = `${BASE_URL}/auth/anonymous?platform=subscriptions`;
const COURSES_URL = `${BASE_URL}/core/preview-courses`;

export { HLS_IS_SUPPORTED, TOKEN_URL, COURSES_URL };
