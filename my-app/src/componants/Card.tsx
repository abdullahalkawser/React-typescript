import React from "react"


const Card = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="border bg-red-500 shadow-lg rounded-lg w-50 h-40 text-white">
        <h1>childen cardss</h1>
        {children}
        pass
        
        </div>
  )
}

export default Card