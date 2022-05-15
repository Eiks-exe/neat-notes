import  React, { CSSProperties }  from 'react'
interface Props {

}

const workspaceContainer : CSSProperties = {
    height: "100vh",
    width: "250px", 
    backgroundColor: "rgba(0,0,0,0.4)"
}

const TopStyle : CSSProperties = {
    height: "30px",
    width: "100%", 
    display: "flex",
    alignItems: "center", 
    justifyContent:"space-around",
    color:'white',
    backgroundColor : "rgba(0,0,0,0.6)"
}

const Workspace : React.FC<Props> = (props: Props) => {

    return(
        <div style={workspaceContainer}>
        <div style={TopStyle}>
        <p>Workspace</p>
        <button>...</button>
        </div>
        </div>
    )
}

export default Workspace ;