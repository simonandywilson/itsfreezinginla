import {Layout} from '../parts/Layout';
import { ButtonLink } from '../parts/Links';
import {Text} from '../parts/Text';

export function GlobalNotFound({error}) {
  return (
    <Layout intent={'centre'}>
      <div className={'flex flex-col gap-4 justify-center items-center pt-16'}>
        <Text as={'h2'} intent={'text-lg'}>
          Not Found {':('}
        </Text>
        <ButtonLink intent={'text-lg'} to={'/'}>
          Back to homepage
        </ButtonLink>
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
