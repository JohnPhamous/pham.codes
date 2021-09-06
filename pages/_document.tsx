import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const description =
      "John Pham's personal website. John is a software engineer, rookie lifter, and plant parent based in Seattle.";
    const heroPath = '/images/hero.png';
    const title = 'John Pham';

    return (
      <Html lang="en">
        <Head>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pham.codes/" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={heroPath} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://pham.codes/" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={heroPath} />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/favicon/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/favicon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/favicon/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/favicon/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/favicon/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/favicon/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/favicon/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon-128.png"
            sizes="128x128"
          />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="John Pham" />

          <meta name="application-name" content="John Pham" />
          <meta name="msapplication-TileColor" content="#bd93f9" />
          <meta name="msapplication-TileImage" content="/images/favicon/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="/images/favicon/mstile-70x70.png" />
          <meta
            name="msapplication-square150x150logo"
            content="/images/favicon/mstile-150x150.png"
          />
          <meta name="msapplication-wide310x150logo" content="/images/favicon/mstile-310x150.png" />
          <meta
            name="msapplication-square310x310logo"
            content="/images/favicon/mstile-310x310.png"
          />

          <meta name="theme-color" content="#bd93f9" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
