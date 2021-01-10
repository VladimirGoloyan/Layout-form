import React from 'react'
import "./Main.scss"

export const Main = ({children}) => {
    return (
        <div className="Main">
            Main content
            {children}
        </div>
    )
}
