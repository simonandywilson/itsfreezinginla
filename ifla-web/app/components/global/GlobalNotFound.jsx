import {Layout} from '../parts/Layout';
import {Link} from '../parts/Link';
import {Text} from '../parts/Text';

export function GlobalNotFound({error}) {
  return (
    <Layout intent={'centre'}>
      <div className={"flex flex-col gap-4 justify-center items-center pt-16"}>
        <Text tag={'h2'} intent={"ui-3xl"}>Not Found {":("}</Text>
        <Link intent={'button-xl'} to={'/'}>
          <Text tag={'h3'} intent={"ui-2xl"}>Back to homepage</Text>
        </Link>
        {/* <Text>
          {error?.stack && (
            <pre
              dangerouslySetInnerHTML={{
                __html: addLinksToStackTrace(error.stack),
              }}
            />
          )}
        </Text> */}
      </div>
    </Layout>
  );
}

function addLinksToStackTrace(stackTrace) {
  return stackTrace?.replace(
    /^\s*at\s?.*?[(\s]((\/|\w\:).+)\)\n/gim,
    (all, m1) =>
      all.replace(
        m1,
        `<a href="vscode://file${m1}" class="hover:underline">${m1}</a>`,
      ),
  );
}