import Link from "next/link"
import styles from "../styles/pages/guide.module.sass"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MobileNavEscape(props) {
    function hideNav () {
        let nav = document.getElementById("course-nav-menu")
        let escape = document.getElementById("nav-escape")
        nav.style.display = "none"
        escape.style.display = "none"
    }
    return (
            <div className={styles["nav-escape"]} id={"nav-escape"} onClick={hideNav}>
            </div>
    )
}


