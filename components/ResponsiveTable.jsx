import styles from "../styles/pages/guide.module.sass"

export default function ResponsiveTable(props) {
    return (
        <div className={styles["responsive-table"]}>
            <table>{props.children} </table>
        </div>
    )
}


