import Head from "next/head";
import ENV from "constants/env";

export default function MainHead(props) {  
  
  const { seo } = props;
  const {
    TITLE,
    DESC,
    KEYWORDS,
    CANONICAL_URL,
    OG_LOCALE,
    OG_TITLE,
    OG_DESC,
    OG_TYPE,
    OG_SITENAME,
    OG_URL,
    OG_IMAGE,
    OG_IMAGE_URL,
    OG_IMAGE_TYPE,
    OG_IMAGE_WIDTH,
    OG_IMAGE_HEIGHT,
    OG_IMAGE_ALT,
    OG_TWITTER_CARD,
    OG_TWITTER_TITLE,
    OG_TWITTER_DESC,
    OG_TWITTER_SITE,
  } = seo;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="referrer" content="no-referrer-when-downgrade" />

      {ENV.CURRENT_ENV !== 'local' ? (
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      ) : (
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
        />
      )}

      {ENV.CURRENT_ENV !== 'local' ? (
          <meta name="robots" content="index, follow" />
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )
      }

      {/* <meta name="google-site-verification" content={ENV.GSITE_VERIFICATION} /> */}
      <meta name="language" content="id" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
      />
      <meta name="theme-color" content="pink" />
      {/* <meta property="fb:app_id" content={ENV.FB_APP_ID} /> */}

      <title>{TITLE}</title>
      {DESC && <meta name="description" content={DESC} />}
      <meta name="keywords" content={KEYWORDS} />

      {/* META OG */}
      <meta property="og:locale" content={OG_LOCALE} />
      <meta property="og:title" content={OG_TITLE} />
      {OG_DESC && <meta property="og:description" content={OG_DESC} />}
      <meta property="og:type" content={OG_TYPE} />
      <meta property="og:site_name" content={OG_SITENAME} />
      <meta property="og:url" content={OG_URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:url" content={OG_IMAGE_URL} />
      <meta property="og:image:type" content={OG_IMAGE_TYPE} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:twitter:card" content={OG_TWITTER_CARD} />
      <meta property="og:twitter:title" content={OG_TWITTER_TITLE} />
      {OG_TWITTER_DESC && (
        <meta property="og:twitter:description" content={OG_TWITTER_DESC} />
      )}
      <meta property="og:twitter:site" content={OG_TWITTER_SITE} />

      <link rel="canonical" href={CANONICAL_URL} />
      
      {/* <HeadLinks /> */}
      <link rel="icon" href={ENV.LOGO} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={ENV.LOGO}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={ENV.LOGO}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={ENV.LOGO}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="16x16"
        href={ENV.LOGO}
      />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </Head>
  );
}
