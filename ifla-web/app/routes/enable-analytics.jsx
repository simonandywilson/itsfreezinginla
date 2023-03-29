import {json} from '@shopify/remix-oxygen';
import {gdprConsent} from '~/cookies';

export const action = async ({request}) => {
  const formData = await request.formData();
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await gdprConsent.parse(cookieHeader)) || {};

  if (formData.get('accept-gdpr') === 'true') {
    cookie.gdprConsent = true;
  }

  if (formData.get('accept-gdpr') === 'false') {
    cookie.gdprConsent = false;
  }

  return json(
    {success: true},
    {
      headers: {
        'Set-Cookie': await gdprConsent.serialize(cookie),
      },
    },
  );
};
