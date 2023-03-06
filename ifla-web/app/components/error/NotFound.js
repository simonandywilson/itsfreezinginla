import {Layout} from '../parts/Layout';
import {Link} from '../parts/Link';
import {Text} from '../parts/Text';

export function NotFound({error}) {
  return (
    <Layout intent={'center'}>
      <div>
        <Text tag={'h2'}>Not Found</Text>
        <Link intent={'button-xl'} to={'/'}>
          <Text tag={'h3'}>Take me to homepage</Text>
        </Link>
        <Text>
          {error?.stack && (
            <pre
              dangerouslySetInnerHTML={{
                __html: addLinksToStackTrace(error.stack),
              }}
            />
          )}
        </Text>
      </div>
    </Layout>
  );
}
