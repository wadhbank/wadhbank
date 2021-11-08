import Head from "next/head";
import { Provider } from "next-auth/client";
import Router from "next/router";
import "../styles/globals.css";
import { useState } from "react";
import { Spin } from "antd";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });
  return (
    <>
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
        {isLoading && <Spin />}
        {!isLoading && <Component {...pageProps} />}
      </Provider>
    </>
  );
}

export default MyApp;
