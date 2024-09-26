import { useState } from "react"
type Users = {
    id:number,
    name:string
}

const CounterHook = () => {
    const[user,setuser]=useState <null | Users> (null) //{} as users aita dile optional chian na dilew hbe
    const handleUser=()=>{
        setuser({id:1,name:'abdullah'})
        console.log(user)
    }
  return (
    <div>
        <button onClick={handleUser}>add</button>
        {user?.name}
    </div>
  )
}

export default CounterHook