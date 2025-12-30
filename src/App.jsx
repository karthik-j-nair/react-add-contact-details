import { useState } from "react";
import AllContacts from "./components/AllContacts";
import Form from "./components/Form";

const App = () => {
  const getLocalData = () => {
    try {
      const raw = localStorage.getItem("all-users");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Invalid localStorage data for all-users", e);
      return [];
    }
  };

  const [allUsers, setAllUsers] = useState(getLocalData());

  return (
    <div className="w-screen h-screen p-8 flex justify-between bg-zinc-500">
      <Form setAllUsers={setAllUsers} />
      <AllContacts allUsers={allUsers} setAllUsers={setAllUsers} />
    </div>
  );
};

export default App;
