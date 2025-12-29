import React from "react";
import Card from "./Card";

const AllContacts = ({ allUsers, setAllUsers}) => {
  // console.log(copy);
  
  const deleteContact = (id) => {
    const copy = [...allUsers];
    copy.splice(id, 1);
    setAllUsers(copy)
  }
  
  return (
    <div className="all-contacts w-[60%] h-full p-10 rounded-r-xl bg-linear-to-r from-zinc-300 to-zinc-500 flex flex-wrap justify-center gap-4 overflow-auto">
      {/* <Card /> */}

      {allUsers.map(function (contact, idx) {
        return <Card id={idx} key={idx} deleteContact={deleteContact} {...contact} />;
      })}
    </div>
  );
};

export default AllContacts;
