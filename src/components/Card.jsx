const Card = ({id, username, image, phone, email, deleteContact}) => {
  return (
    <div className="card bg-zinc-200 h-[50%] w-[40%] rounded-xl flex flex-col items-center justify-center gap-2">
      <img
        src={image}
        alt="" className="h-25 w-25 object-cover object-center rounded-full "
      />
      <h2 className="text-lg font-semibold">{username}</h2>
      <p>{phone}</p>
      <p className="text-sm">{email}</p>
      <button onClick={()=> deleteContact(id)} className=" border-none px-4 py-2 bg-red-600 rounded-md font-semibold text-white active:scale-95 cursor-pointer transition-all duration-300 ease-in-out ">Delete Contact</button>
    </div>
  );
};

export default Card;
