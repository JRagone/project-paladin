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
                <h2 className="subtitle is-2">Devblog</h2>
                <h3 className="subtitle is-3" style={{ marginTop: "-1rem" }}>
                    <a href="https://jragone.github.io/" target="_blank">
                        John Ragone
                    </a>
                </h3>
                <TiWeatherCloudy size="4rem" style={{ color: "#0070f3" }} />
                <GiRetroController size="4rem" style={{ marginTop: "-1rem" }} />

                <div className="blogs">
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
