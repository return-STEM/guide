import Link from "next/link";
import Head from "next/head";
import html from "remark-html"
import {COURSES_ROOT} from "../lib/mainsitemap"

export default function Index() {
    return (

        <div className={styles["documentation-container"]}>
            <Head>
                <meta name={"viewport"}
                      content={"height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi"}/>
                      <meta httpEquiv={"refresh"} content={`0;URL='${COURSES_ROOT}'`}  />
            < /Head>
        </div>

    )
}
