
// type userPropos={
//     name:string,
//     age:number,
//     register:boolean,
//     language:string[]
// }

// objcet definne
type userPropos={
  user: {
    name: string;
    age: number;
    register:boolean;
    lang: string[];
  }
}


// //{ name: string; age: number}
// const User = ({user} :userPropos) => {
//   const { name,age,lang}= user;
//   return (
//     <div>
//         <h1>users </h1>
//         <h3>{props.name}</h3>
//         <p>{props.age}</p>
//         {props.register ? <p>user is regiterd</p>:  <p>user is not regiterd</p>}

//    <p>Speksr:

//     {
//       props.language.map((lang,index)=>(
//        <p key={index}>{lang}</p>
//       ))
//     }
//    </p>
//     </div>
//   )
// }


//{ name: string; age: number}
const User = ({user} :userPropos) => {
  const { name,age,lang,register}= user;
  return (
    <div>
        <h1>users </h1>
        <h3>{name}</h3>
        <p>{age}</p>
        {register ? <p>user is regiterd</p>:  <p>user is not regiterd</p>}

   <p>Speksr:
    {
      lang.map((lang,index)=>(
       <p key={index}>{lang}</p>
      ))
    }
   </p>
    </div>
  )
}
export default User