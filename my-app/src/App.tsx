
import './App.css'
import User from './componants/user'

function App() {

  const user ={
    name:'raniya',
    age: 34,
    lang:["bangla","hindi"],
    register:true
  }


  return (
<div className=' '>
  <h1 className='text-5xl mb-10'>React -Typescriyt</h1>
 <div className='flex '>
 {/* <User name='abdullah al kawser' age= {39} register= {false} language={['bangla' ,'Arabic']}/>
 <User name='hassan' age= {390} register= {true} language={['english' ,'Arabic']}/> */}
 <User user={user} />
 </div>
</div>
  )
}

export default App
