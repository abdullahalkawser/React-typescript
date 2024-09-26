
import './App.css'
import CounterHook from './componants/CounterHook'
// import Post from './componants/Post'
import StyleButton from './componants/StyleButton'
// import ChildrenProps from './componants/childrenProps'
// import DataFetch from './componants/DataFetch'
// import User from './componants/user'
// import Users from './componants/users';

function App() {

  // const user ={
  //   name:'raniya',
  //   age: 34,
  //   lang:["bangla","hindi"],
  //   register:true
  // }

  // const users = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     age: 25
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     age: 30
  //   },
  //   {
  //     id: 3,
  //     name: "Bob Johnson",
  //     email: "bob.johnson@example.com",
  //     age: 22
  //   },
  //   {
  //     id: 4,
  //     name: "Alice Williams",
  //     email: "alice.williams@example.com",
  //     age: 28
  //   }
  // ];
  
  // console.log(users);
  
  return (
<div className=' '>
  <h1 className='text-5xl mb-10'>React -Typescriyt</h1>
 <div className='flex '>
 {/* <User name='abdullah al kawser' age= {39} register= {false} language={['bangla' ,'Arabic']}/>
 <User name='hassan' age= {390} register= {true} language={['english' ,'Arabic']}/> */}
 {/* <User user={user} /> */}
 {/* <Users users= {users}/> */}

 {/* <DataFetch stattus = "succses"/> */}
 {/* <ChildrenProps>click me</ChildrenProps> */}
{/* <Post/> */}
{/* <StyleButton stylebtn={{backgroundColor: 'red' }}/> */}
<CounterHook/>
 </div>
</div>
  )
}

export default App
