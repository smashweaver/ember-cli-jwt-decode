//from: https://github.com/auth0/jwt-decode/blob/master/lib/index.js
import { base64UrlDecode } from './-base64-url-decode';

export function jwt_decode(token) {
  if (typeof token !== 'string') {
    throw new Error('Invalid token specified');
  }

  var tokenParts = token.split('.');
  if (tokenParts.length !== 3) {
    throw new Error('Invalid token specified');
  }

  return JSON.parse(base64UrlDecode(tokenParts[1]));
}
