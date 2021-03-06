import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="el">
                <Head>
                    <meta name="description" content="A site for my programming portfolio"/>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    body {
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}