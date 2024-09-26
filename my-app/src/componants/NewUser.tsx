import { useState } from "react"


const NewUser = () => {
    const[userName,setuserName] = useState('')
    // const hnadlechnage=(event: React.ChangeEvent<HTMLInputElement>)=>{
    //     setuserName(event?.target.value)
    // }

    const handleclick =(event: React.MouseEvent<HTMLButtonElement>)=>{
        console.log(userName)

    }
  return (
    <div>
        <h1>NewUser</h1>
        <input type="text" value={userName} onChange={hnadlechnage}  placeholder="enter youyr name"/>
        {/* {userName} */}
        <button onClick={handleclick}>show Name :</button>
    </div>
  )
}

export default NewUser