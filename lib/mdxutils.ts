import GithubSlugger from 'github-slugger'
import {tSOptionalType} from "@babel/types";
import {serialize} from "next-mdx-remote/serialize";

export function getHeadingTree(markdown: string) {
    let slugger = GithubSlugger()
    let lines: string[] = markdown.split(/\r?\n/)
    let headings: Heading[] = []
    let isInsideCodeBlock = false;
    for (let l of lines) {

        let pref = ""
        if (l.startsWith("#")) {
            pref = "#"
            let ind = 1
            while (l[ind] == "#") {
                pref += "#"
                ind++
            }
            if (l[ind] == " " && !isInsideCodeBlock) {
                let headingText = l.substring(ind + 1)
                let slug = slugger.slug(headingText)
                headings.push({
                    level: ind,
                    text: headingText,
                    slug: slug
                })
            }
        }
        else if (l.startsWith("```")) {
            isInsideCodeBlock = !isInsideCodeBlock
        }
    }
    return headings
}

export async function getHeadingTreeMd(markdown: string){
    let headings = getHeadingTree(markdown) as MdHeading[]
    for (let h  of headings){
        h.md = await serialize(h.text)
    }
    return headings
}

type Heading = {
    level: number
    text: string
    slug: string
}

type MdHeading = Heading & {md: any}
