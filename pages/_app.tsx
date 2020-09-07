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
            </Head>
            <Component {...pageProps} />
        </Fragment>
    )
}

export default MyApp
