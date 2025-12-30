import { useState } from "react";

const Form = ({ setAllUsers }) => {
  const [username, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  function onFormSubmit(e) {
    e.preventDefault();

    // const newUser = [...allUsers];
    // newUser.push({username, image, email, phone});
    // setAllUsers(newUser);
    // localStorage.setItem('all-users', JSON.stringify(newUser));

    setAllUsers((prev) => {
      const updated = [...prev, { username, image, email, phone }];
      localStorage.setItem('all-users', JSON.stringify(updated));
      return updated;
    });
    // here prev will be considered as the previous data that is react sets allUsers data to prev

    setUserName("");
    setImage("");
    setPhone("");
    setEmail("");
  }
  return (
    <div className="form-section h-full w-[39.5%] rounded-l-xl bg-linear-to-r from-zinc-500 to-zinc-300 py-30">
      <form
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
        className="h-full flex flex-col items-center justify-center gap-8"
      >
        <input
          type="text"
          value={username}
          onChange={(dets) => {
            setUserName(dets.target.value);
          }}
          placeholder="Enter User's Name"
          required
          className="text-xl w-[70%] px-4 py-3 border-2 border-zinc-500 rounded-4xl outline-none "
        />
        <input
          type="text"
          value={image}
          onChange={(dets) => {
            setImage(dets.target.value);
          }}
          placeholder="Profile Picture Link"
          required
          className="text-xl w-[70%] px-4 py-3 border-2 border-zinc-500 rounded-4xl outline-none "
        />
        <input
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={(dets) => {
            setPhone(dets.target.value);
          }}
          placeholder="Enter Mobile Number"
          required
          className="text-xl w-[70%] px-4 py-3 border-2 border-zinc-500 rounded-4xl outline-none "
        />
        <input
          type="email"
          value={email}
          onChange={(dets) => {
            setEmail(dets.target.value);
          }}
          placeholder="Enter Email ID"
          required
          className="text-xl w-[70%] px-4 py-3 border-2 border-zinc-500 rounded-4xl outline-none "
        />
        <button className="border-none cursor-pointer bg-linear-to-r from-zinc-500 to-zinc-800 text-white px-6 py-3 rounded-4xl active:scale-98 transition-all ease-in-out">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Form;
