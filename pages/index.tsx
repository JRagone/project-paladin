import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GiRetroController } from "react-icons/gi";
import { TiWeatherCloudy } from "react-icons/ti";

export default function Home(): JSX.Element {
    return (
        <section className="section">
            <Head>
                <title>Project Paladin</title>
            </Head>

            <div className="container">
                <h1 className="title is-1">Project Paladin</h1>
                <h2 className="subtitle is-2">Devblog</h2>
                <TiWeatherCloudy size="4rem" />
                <GiRetroController size="4rem" style={{ marginTop: "-1rem" }} />

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
            </div>
            <style jsx>{`
                .section {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </section>
    );
}
