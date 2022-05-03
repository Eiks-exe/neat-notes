import React, { JSXElementConstructor } from "react";
import { unified } from 'unified'; 
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm"
interface PreviewProps{
    doc : string
}

const Preview: React.FC<PreviewProps> = (props) => {
    const md = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(remarkGfm)
        .use(rehypeReact, React)
        .processSync(props.doc).result
        
   
    return(
        <div>
        {md} 
        </div>
    )
}

export default Preview