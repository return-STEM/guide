import path from "path";
import {promises as fs} from "fs";
import Link from "next/link";
import html from "remark-html"
import {remark} from "remark";
import Head from "next/head"
import dynamic from "next/dynamic"
import {MDXRemote} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize";
import styles from "../../../styles/pages/guide.module.sass"
import CourseNavMenu from "../../../components/CourseNavMenu";
import {getHeadingTreeMd} from "../../../lib/mdxutils"

import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism'
import rehypeKatex from 'rehype-katex'

import MobileNavBar from "../../../components/MobileNavBar";
import MobileNavEscape from "../../../components/MobileNavEscape";
import ResponsiveTable from "../../../components/ResponsiveTable"


import {COURSES_ROOT} from "../../../lib/mainsitemap";
import matter from "gray-matter";

const options = {

    parseFrontmatter: true,
    mdxOptions: {
        remarkPlugins: [
            remarkMath // Math parsing
        ],
        rehypePlugins: [
            rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
            rehypePrism, // syntax highlighting
            rehypeKatex //LaTeX support
        ],
    }
};


export async function getStaticPaths() {
    const dir = path.join(process.cwd(), 'data/courses.json');
    const courses = JSON.parse(await fs.readFile(dir, 'utf8'));
    const paths = []

    for (const c of courses.courses) {

        let walkthroughDataPath = `${process.cwd()}/public/${c.href}/metadata.json`
        let walkthroughData = JSON.parse(await fs.readFile(walkthroughDataPath, 'utf8'));
        for (const l of walkthroughData.lessons) {
            paths.push(
                {
                    params: {course: c.href, lesson: l.href}
                }
            )
        }
    }
    return {paths, fallback: false}
}


export async function getStaticProps({params}) {
    const dir = path.join(process.cwd(), 'data/courses.json');
    const courses = JSON.parse(await fs.readFile(dir, 'utf8'));
    const courseData = courses.courses.find(elem => elem.href === params.course);

    let walkthroughDataPath = `${process.cwd()}/public/${courseData.href}/metadata.json`
    let walkthroughData = JSON.parse(await fs.readFile(walkthroughDataPath, 'utf8'));

    let lessonData = walkthroughData.lessons.find(elem => elem.href === params.lesson)

    let mdContent = await fs.readFile(`${process.cwd()}/public/${courseData.href}/${lessonData.href}.mdx`)
    let frontMatter = matter(mdContent)
    let headings = await getHeadingTreeMd(mdContent.toString())

    mdContent = await serialize(mdContent, options)
    frontMatter = frontMatter.data

    return {
        props: {courseData, walkthroughData, lessonData, mdContent, headings, frontMatter}
    }
}

export default function Handout({courseData, walkthroughData, lessonData, mdContent, headings, frontMatter}) {
    return (

        <div className={styles["embed-container"]}>
            <Head>
                <meta name={"viewport"}
                      content={"height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi"}/>
                <link rel="shortcut icon" href="/img/Logo.svg" />
                <title>{lessonData.name} Handout | Return STEM;</title>
                <meta charSet="UTF-8" />
            </Head>

            <MobileNavBar
                courseData={courseData}
                walkthroughData={walkthroughData}
                lessonData={lessonData}
                headings={headings}
            />
            <MobileNavEscape/>
            <CourseNavMenu courseData={courseData}
                           walkthroughData={walkthroughData}
                           lessonData={lessonData}
                           headings={headings}

            />
            <div className={styles["content-container"]}>
                {
                    (frontMatter?.handout) ?
                        <div className={styles["embed-handout"]}>
                            <iframe src={`${frontMatter?.handout}/pub?embedded=true`} frameBorder={0} allowFullScreen={true} />
                        </div>
                        :
                        <div className={styles["md-container"]}>
                            <h1>There is no handout for this lesson.</h1>
                        </div>
                }
            </div>
        </div>

    )
}
