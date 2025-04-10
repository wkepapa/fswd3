import { useState } from 'react';
import Card from './components/card';
import './App.css';
function App() {
  const[name,setname]=useState('')
  const[message,setmessage]=useState('')
  const [formdata,setformdata]=useState([])
  const submitcontrol=(event)=>{
  event.preventDefault();
  if(name.trim()===""||message.trim()==="")return
  setformdata([...formdata,{name,message}])
  setname("");
  setmessage("");
  }
  return (
    <div className='app-container'>
      <h1>Form cards Displayer</h1>
      <form className='form-class' onSubmit={submitcontrol}>
      <input
      type="text"
      placeholder='enter name'
      value={name}
      onChange={(e)=>setname(e.target.value)}
      />
      <input
      type='text'
      placeholder='type your message'
      value={message}
      onChange={(e)=>setmessage(e.target.value)}
      />
     < button type="submit" className='submit-button'>submit</button>
</form>
<div className='card-display'>
  {formdata.map((prop,index)=>(
   <Card key={index} name={prop.name} message={prop.message}/>
  )

 ) }
</div>
    </div>
  );
}
export default App;
