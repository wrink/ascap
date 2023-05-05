import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ' crossOrigin='anonymous' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css' />
        <link href='//db.onlinewebfonts.com/c/3d85dc16e94da9358d451666fdbc3398?family=Circular+Medium' rel='stylesheet' type='text/css'/>
        <link href='//db.onlinewebfonts.com/c/790b3c13fc2762b72a49fcefab324514?family=Circular+Black' rel='stylesheet' type='text/css'/>
        <link href='//db.onlinewebfonts.com/c/02d8f1743ede250c7c9865f1574d7cc6?family=Circular+Book' rel='stylesheet' type='text/css'/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe' crossOrigin='anonymous' />
      </body>
    </Html>
  )
}
