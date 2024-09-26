import React from "react"

type Buttionprops= {
    children: React.ReactNode
}

const ChildrenProps = (props: Buttionprops) => {
  return (
    <button>{props.children}</button>
  )
}

export default ChildrenProps