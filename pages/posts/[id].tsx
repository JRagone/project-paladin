import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"
import Head from "next/head"
import Link from "next/link"
import { Fragment } from "react"
import { TiWeatherCloudy } from "react-icons/ti"

export default function Post({ postData }) {
    return (
        <Fragment>
            <nav
                className="navbar is-fixed-top"
                style={{ boxShadow: "0 4px 2px -2px rgba(1, 1, 1, 0.1)" }}
            >
                <div className="container">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <Link href="/">
                                <a
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        className="title is-3"
                                        style={{
                                            marginBottom: "0",
                                        }}
                                    >
                                        Project Paladin
                                    </div>
                                    <TiWeatherCloudy
                                        size="3rem"
                                        style={{ marginLeft: "1rem" }}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="section">
                <Head>
                    <title>Project Paladin</title>
                </Head>
                <div className="container">
                    <div>
                        <h1 className="title is-1">{postData.title}</h1>
                        <h2 className="subtitle is-2">{postData.subtitle}</h2>
                        <hr className="solid bar-1"></hr>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: postData.content }}
                    />
                </div>
            </section>
            <style jsx>
                {`
                    .section {
                        margin-top: 2.5rem;
                    }
                `}
            </style>
        </Fragment>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}

function getPostData(id) {
    const fullPath = path.join("articles", `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const renderer = {
        heading(text, level) {
            return `
                <h${level} class="title is-${level}">
                    ${text}
                    
                </h${level}>
                ${level <= 2 ? `<hr class="solid bar-${level}"></hr>` : ""}
            `
        },
        table(header, body) {
            return `
                <table class="table is-bordered is-striped is-hoverable">
                    ${header}
                    ${body}
                </table>
            `
        },
        list(body, ordered, start) {
            return `
                <${ordered ? "ol" : "ul"} style="padding-left: 1rem;">
                    ${body}
                <${ordered ? "/ol" : "/ul"}>
            `
        },
    }

    marked.use({ renderer })

    const content = marked(matterResult.content)

    // Combine the data with the id
    return {
        id,
        content,
        ...matterResult.data,
    }
}

function getAllPostIds() {
    const fileNames = fs.readdirSync("articles")

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        }
    })
}
