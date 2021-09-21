import Head from 'next/head';

const BarbellPlateCalculatorLayout: React.FC = ({ children }) => {
  const description =
    "John Pham's personal website. John is a software engineer, rookie lifter, and plant parent based in Seattle.";
  const heroPath = 'https://pham.codes/images/hero.png';
  const title = 'Barbell Plate Racking Calculator';

  return (
    <div>
      <Head>
        <title>{title}</title>
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/*  eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default BarbellPlateCalculatorLayout;
