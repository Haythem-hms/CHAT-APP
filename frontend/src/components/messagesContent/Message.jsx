const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className ="w-10 rounded-full" >
                <img
                alt="Tailwind CSS CHAT BUBBLE COMPONENT"
                src={"https://avatar.iran.liara.run/public/94"}
                ></img>    
            </div>  
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hi ! What's going on ? </div>
        <div className={'chat-footer opacity-50  text-xs flex gap-1 items-center'}>10:52</div>
    </div>
  )
}
export default Message