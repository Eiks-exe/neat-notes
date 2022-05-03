import React, { useCallback } from "react";
import '../../index.css'

const editorStyle : React.CSSProperties = {
    minHeight: "99.5vh",
    width:"100%",
    

}

interface EditorProps {
    doc: string,
    onChange: (doc: string) => void
}


const Editor : React.FC<EditorProps> = (props: EditorProps) => {
    const { onChange, doc} = props
    const handleChange = useCallback(
        (event : React.ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value),
        [onChange]
      )
    return(
        <div>
            <textarea value={doc} onChange={handleChange} style={editorStyle} autoFocus className="editor">
            </textarea>
        </div>
    )
}

export default Editor; 
