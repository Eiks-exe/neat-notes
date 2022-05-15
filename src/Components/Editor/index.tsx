import { EditorState } from "@codemirror/state";
import React, { useCallback, useEffect } from "react";
import "../../index.css";

import useCodeMirror from './useCodeMirror'

interface EditorProps {
  doc: string;
  onChange: (doc: string) => void;
}

const editorStyle : React.CSSProperties = {
  minHeight: "100vh",
  width:"100%",
  background: "transparent",
}


const Editor : React.FC<EditorProps> = (props: EditorProps) => {
  const { onChange, doc} = props
  
  
  const handleChange = useCallback(
      (state: EditorState) => onChange(state.doc.toString()),
      [onChange]
      )
      
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
      doc: doc,
      onChange: state => handleChange(state)
  })
      
 useEffect(()=>{
      if(editorView){

      }
 },[editorView])
 return <div style={editorStyle} ref={refContainer} className="editor"></div>
}

export default Editor; 

