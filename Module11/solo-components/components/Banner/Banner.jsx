import React, {createContext} from "react"

const StyleContext = createContext(null);
export {StyleContext}

export default function Banner({style, children}) {
    return (
        <StyleContext.Provider value={style}>
            <div className={`banner ${style}`}>{children}</div>
        </StyleContext.Provider>
    )
}