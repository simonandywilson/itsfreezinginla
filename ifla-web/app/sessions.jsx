import {
  createCookieSessionStorageFactory,
  createCookieFactory,
} from '@remix-run/server-runtime';

const encoder = new TextEncoder();

export const sign = async (value, secret) => {
  const data = encoder.encode(value);
  const key = await createKey(secret, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, data);
  const hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(
    /=+$/,
    '',
  );

  return value + '.' + hash;
};

export const unsign = async (cookie, secret) => {
  const value = cookie.slice(0, cookie.lastIndexOf('.'));
  const hash = cookie.slice(cookie.lastIndexOf('.') + 1);

  const data = encoder.encode(value);
  const key = await createKey(secret, ['verify']);
  const signature = byteStringToUint8Array(atob(hash));
  const valid = await crypto.subtle.verify('HMAC', key, signature, data);

  return valid ? value : false;
};

async function createKey(secret, usages) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    {name: 'HMAC', hash: 'SHA-256'},
    false,
    usages,
  );

  return key;
}

function byteStringToUint8Array(byteString) {
  const array = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    array[i] = byteString.charCodeAt(i);
  }

  return array;
}


const createCookie = createCookieFactory({sign, unsign});
const createCookieSessionStorage =
  createCookieSessionStorageFactory(createCookie);
const {getSession, commitSession, destroySession} = createCookieSessionStorage({
  cookie: {
    name: '__session',
    sameSite: 'lax',
    secrets:[]
  },
});

export {getSession, commitSession, destroySession};