import Link from "next/link"
import styles from "../styles/pages/guide.module.sass"
import {MDXRemote} from "next-mdx-remote";
import {COURSES_ROOT} from "../lib/mainsitemap";

export default function CourseNavMenu(props) {

    return (
        <div className={styles["nav"]} id={"course-nav-menu"}>

            <Link href={`${COURSES_ROOT}/${props.courseData.href}`}>
                <div
                    className={styles["nav-title"]}
                    style={{backgroundImage: `url(/img/thumbnails/${props.courseData.href}.svg)`}}>
                    <Link href={`${COURSES_ROOT}`}>

                        <div className={styles["nav-org-banner"]}>
                            <img src="/img/Logo.svg" alt="logo"/>
                            <h1>Return STEM;</h1>
                        </div>
                    </Link>

                    <h1> {props.courseData.name} </h1>
                </div>

            </Link>
            <div className={styles["nav-lesson-list"]}>
                <div style={{paddingTop: "20px"}}/>
                <div>
                {
                    props.walkthroughData.lessons.map((lesson) => {
                        return (
                            <Link key={`${props.courseData.href}/${lesson.href}`}
                                  href={`/${props.courseData.href}/${lesson.href}`}>
                                {
                                    props.lessonData.href === lesson.href ?
                                        <div>
                                            <div className={styles["nav-lesson-active"]}>
                                                {lesson.name}
                                            </div>
                                            <div className={styles["nav-lesson-header-list"]}>
                                                {
                                                    props.headings.map((heading) => {
                                                            if (heading.level === 1) {
                                                                return (

                                                                    <Link key={heading.slug} href={`/${props.courseData.href}/${lesson.href}#${heading.slug}`}>
                                                                        <div>
                                                                            <MDXRemote {...heading.md}></MDXRemote>
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            } else return ("")
                                                        }
                                                    )
                                                }
                                            </div>
                                        </div> :
                                        <div className={styles["nav-lesson"]}>
                                            {lesson.name}
                                        </div>
                                }

                            </Link>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}


