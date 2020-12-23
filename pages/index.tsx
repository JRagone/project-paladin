import Head from "next/head"
import { GiRetroController } from "react-icons/gi"
import { TiWeatherCloudy } from "react-icons/ti"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function Home({ allPostsData }): JSX.Element {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-1">Project Paladin</h1>
                <h3 className="subtitle is-3" style={{ marginTop: "-1rem" }}>
                    <a href="https://jragone.github.io/" target="_blank">
                        John Ragone
                    </a>
                </h3>
                <TiWeatherCloudy size="4rem" style={{ color: "#0070f3" }} />
                <GiRetroController size="4rem" style={{ marginTop: "-1rem" }} />
                <div className="blogs">
                    <div style={{display: "flex"}}>
                        <div style={{flexGrow: 1, width: 0}}>
                            <h2 className="subtitle is-2" style={{textAlign: "center"}}>Summary</h2>
                            <p>As of fall 2020, cloud gaming services are largely unavailable to those outside North America and Central Europe. Project Paladin is a research project that delivered a new means to game on the cloud to those without access to modern cloud gaming services. This project was conducted by me, John Ragone, under my research director <a href="https://ayarger.com/" target="_blank">Austin Yarger</a>.</p>
                            <br></br>
                            <p>The products of this research include two Medium articles detailing how to set up the cloud gaming software <a href="https://moonlight-stream.org/" target="_blank">Moonlight</a> on Google Cloud Platform (GCP) and the performance of Moonlight vs. Parsec on GCP. Along with these articles, two YouTube videos were created – <a href="https://youtu.be/kNZ6NhPJYfA" target="_blank">one for the guide</a> and <a href="https://youtu.be/Eh7-l-PyY6Q" target="_blank">another for the comparison</a>. At the time of writing, the products of this research have been viewed by several thousand, and it has been applauded internationally by cloud gaming enthusiasts from Latin America to Singapore.</p>
                        </div>
                    </div>
                    <h2 className="subtitle is-2" style={{textAlign: "center", marginTop: "3rem"}}>Highlights</h2>
                    <a href="https://johnragone.medium.com/500-hours-of-free-4k-60-fps-cloud-gaming-c796fa10f0a3" target="_blank">
                        <div className="article">
                            <h3 className="title is-3">Moonlight on Google Cloud Platform</h3>
                            <h4 className="subtitle is-4">
                                A guide to configure Moonlight on GCP
                            </h4>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img src="/highlights/medium-bioshock.png" className="rounded" style={{width: "500px"}}></img>
                            </div>
                        </div>
                    </a>
                    <a href="https://johnragone.medium.com/moonlight-vs-parsec-on-google-cloud-platform-1d43cfd0f2c1" target="_blank">
                        <div className="article" style={{marginTop: "1.5rem"}}>
                            <h3 className="title is-3">Moonlight vs. Parsec on Google Cloud Platform</h3>
                            <h4 className="subtitle is-4">
                                A qualitative comparison of Moonlight and Parsec on GCP
                            </h4>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img src="/highlights/medium-moon-par.png" className="rounded" style={{width: "500px"}}></img>
                            </div>
                        </div>
                    </a>
                    <h2 className="subtitle is-2" style={{textAlign: "center", marginTop: "3rem"}}>Devblog</h2>
                    {allPostsData.map(({ id, date, title, subtitle }, index) => (
                        <div key={id} style={{marginTop: index === 0 ? "" : "1.5rem"}}>
                            <Link href={`posts/${id}`}>
                                <a>
                                    <div className="article">
                                        <h3 className="title is-3">{title}</h3>
                                        <h4 className="subtitle is-4">
                                            {subtitle}
                                        </h4>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
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
                .article {
                    border-radius: 6px;
                    padding: 1.25rem;
                    box-shadow: 0 0.5em 1em -0.125em rgba(1, 1, 1, 0.1),
                        0 0px 0 1px rgba(1, 1, 1, 0.02);
                    border: 1px solid transparent;
                    transition: all 0.2s ease-in-out;
                }
                .blogs {
                    margin-top: 3rem;
                    width: 100%;
                }
                .rounded {
                    border-radius: 6px;
                }
            `}</style>
        </section>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}

function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync("articles")
    interface thing {
        id: string
        [key: string]: any
    }
    const allPostsData: thing[] = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "")

        // Read markdown file as string
        const fullPath = path.join("articles", fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}
