
import './App.css'
import User from './componants/user'

function App() {


  return (
<div>
  <h1 className='text-5xl mb-10'>React -Typescriyt</h1>
  <User name='abdullah al kawser' age= {39} register= {false}/>
  <User name='hassan' age= {390} register= {true}/>
</div>
  )
}

export default App
