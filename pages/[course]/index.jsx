import path from "path";
import {promises as fs} from "fs";
 import Link from "next/link";

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

export async function getStaticProps({ params }) {
    const dir = path.join(process.cwd(), 'data/courses.json');
    const courses = JSON.parse(await fs.readFile(dir, 'utf8'));
    const courseData = courses.courses.find(elem => elem.href == params.course);

    let walkthroughDataPath = `${process.cwd()}/public/guide/${courseData.href}/metadata.json`

    let walkthroughData = JSON.parse(await fs.readFile(walkthroughDataPath, 'utf8'));

    return {
        props: { courseData, walkthroughData }
    }
}

export default function CourseIndex({ courseData, walkthroughData }) {
    return (
        <div>

            <h1>{courseData.name}</h1>
            <ol>

                {walkthroughData.lessons.map(l => {
                    return <Link href={`${courseData.href}/${l.href}`} key={`${courseData.href}/${l.href}`}><li>{l.name}</li></Link>

            })}
            </ol>
        </div>
    )
}
