import React from "react";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";
import Workspace from "./Components/Workspace";

const rootStyle : React.CSSProperties = {
    display: "flex",
    flexDirection:"column",
    overflow: "hidden",
} 

const tileBar : React.CSSProperties = {
    height:'31px',
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    color:"white",
    display: "flex",
    justifyContent: 'center'
}

const mainContainer : React.CSSProperties = {
    display: "flex"
}

const App : React.FC = () =>{
    const [doc, setDoc] = React.useState('# hello world')
    const handleDocChange = React.useCallback((newDoc:string) => {
        setDoc(newDoc)
      }, [])
    return(
        <div style={rootStyle}>
            <div style={tileBar}>
                neat
            </div>
            <div style={mainContainer}>
                <Workspace/>
                <Editor doc={doc} onChange={handleDocChange}/>
            </div>
        </div>
    );
}

export default App;