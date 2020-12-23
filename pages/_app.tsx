import "../styles/globals.scss"
import { Fragment } from "react"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta
                    name="description"
                    content="Devblog researching the efficacy of cloud gaming"
                />
                <meta name="keywords" content="Project Paladin, Cloud Gaming" />
                <meta name="author" content="John Ragone" />
                <title>Project Paladin | Cloud Gaming as a Modern Medium</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9DBYFLC7EL"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', 'G-9DBYFLC7EL');`
                }} />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    )
}

export default MyApp
