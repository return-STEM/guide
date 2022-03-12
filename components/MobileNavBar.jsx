import Link from "next/link"
import styles from "../styles/pages/guide.module.sass"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MobileNavBar(props) {

    function showNavMenu() {
        let nav = document.getElementById("course-nav-menu")
        let escape = document.getElementById("nav-escape")
        if (nav.style.display === "none" || nav.style.display === "") {
            nav.style.display = "block"
            escape.style.display = "block"
        } else if (nav.style.display === "block") {
            nav.style.display = ""
            escape.style.display = "none"
        }
    }
    return (
        <div className={styles["nav-bar-mobile"]}
             style={{backgroundImage: `url(/img/thumbnails/${props.courseData.href}.svg)`}}>
            <div className={styles["mobile-menu-button"]}  onClick={showNavMenu}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className={styles["cur-lesson-view"]}>
                <Link href={`/${props.courseData.href}`}>
                    <span className={styles["course-name"]}>
                        {props.courseData.name}
                    </span>
                </Link>
                <FontAwesomeIcon icon={faAngleRight}/>
                <span>
                    {props.lessonData.name}
                </span>

            </div>
            <Link href={"/"}>
                <img src="/img/Logo.svg" alt="logo"/>
            </Link>

        </div>
    )
}


