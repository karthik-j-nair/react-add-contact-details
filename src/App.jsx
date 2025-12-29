import { useState } from "react";
import AllContacts from "./components/AllContacts"
import Form from "./components/Form"

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  
  return (
    <div className='w-screen h-screen p-8 flex justify-between bg-zinc-500'>
      <Form setAllUsers={setAllUsers} />
      <AllContacts allUsers={allUsers} setAllUsers={setAllUsers}/>
    </div>
  )
}

export default App
