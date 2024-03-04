import React from "react" 

export default function Badge({color="gray", shape="square", children}) {
    
    return (
        <div className={`badge ${color} ${shape}`}>{children}</div>
    )
}