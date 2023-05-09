// Resource route to set cookie consent
import {json} from '@shopify/remix-oxygen';
import {gdprConsent} from '../cookies';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const gdprPreference = JSON.parse(formData.get("accept-cookies"));
	return json(
    {success: true},
    {
      headers: {
        'Set-Cookie': await gdprConsent.serialize({
          gdprPreference,
        }),
      },
    },
  );
};

export const loader = () => redirect("/", { status: 404 });
