import Document, { Head, Main, NextScript } from 'next/document'
import "../static/styles.scss"

export default class MyDocument extends Document {
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
