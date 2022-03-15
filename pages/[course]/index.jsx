import path from "path";
import {promises as fs} from "fs";
import Link from "next/link";
import Head from "next/head";
import {COURSES_ROOT} from "../../lib/mainsitemap";

export async function getStaticPaths() {
    const dir = path.join(process.cwd(), 'data/courses.json');
    const courses = JSON.parse(await fs.readFile(dir, 'utf8'));
    const paths = courses.courses.map(obj => {
        return {
            params: {
                course: obj.href,
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const dir = path.join(process.cwd(), 'data/courses.json');
    const courses = JSON.parse(await fs.readFile(dir, 'utf8'));
    const courseData = courses.courses.find(elem => elem.href == params.course);

    return {
        props: {courseData}
    }
}

export default function CourseIndex({courseData}) {
    return (
        <div>
            <Head>
                <meta name={"viewport"}
                      content={"height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi"}/>
                <meta httpEquiv={"refresh"} content={`0;URL='${COURSES_ROOT}/${courseData.href}'`}/>
            < /Head>
        </div>
    )
}
