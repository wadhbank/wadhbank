import Head from "next/head";
import { Provider } from "next-auth/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider options={{ clientMaxAge: 0 }} session={pageProps.session}>
      <Head>
        {typeof window === "undefined" && (
          <style
            id="holderStyle"
            dangerouslySetInnerHTML={{
              __html: `
         *, *::before, *::after {
           transition: none!important;
         }
         `,
            }}
          />
        )}
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
