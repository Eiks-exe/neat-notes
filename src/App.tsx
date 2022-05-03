import React from "react";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

const rootStyle : React.CSSProperties = {
    display: "flex",
} 

const App : React.FC = () =>{
    const [doc, setDoc] = React.useState('# hello world')
    const handleDocChange = React.useCallback((newDoc:string) => {
        setDoc(newDoc)
        console.log(newDoc)
      }, [])
    return(
        <div style={rootStyle}>
            <Editor doc={doc} onChange={handleDocChange}/>
            <Preview doc={doc}/>
        </div>
    );
}

export default App;