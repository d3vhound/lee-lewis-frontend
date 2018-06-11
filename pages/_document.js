import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: "ElegantIcons";
              src: url("/static/fonts/ElegantIcons.woff") format("woff"),
                  url("/static/fonts/ElegantIcons.ttf") format("ttf"),
                  url("/static/fonts/ElegantIcons.svg") format("svg"),
                  url("/static/fonts/ElegantIcons.eot") format("eot");
            }
          `}} />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
