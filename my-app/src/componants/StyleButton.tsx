import React from 'react'

type ButtionProps ={
    stylebtn:React.CSSProperties
}
const StyleButton = ({stylebtn}:ButtionProps) => {
  return (
    <div style={stylebtn}>Style propdsss</div>
  )
}

export default StyleButton