import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="send a message"
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          <IoIosSend className="text-sky-500" /> {/* Ajout de la couleur ici */}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

