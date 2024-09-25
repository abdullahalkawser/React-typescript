
type userPropos={
    name:string,
    age:number,
    register:boolean
}
//{ name: string; age: number}
const User = (props :userPropos) => {
  return (
    <div>
        <h1>users </h1>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        {props.register ? <p>user is regiterd</p>:  <p>user is not regiterd</p>}
    </div>
  )
}

export default User