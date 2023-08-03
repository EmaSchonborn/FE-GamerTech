import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imagen from "../../Imagenes/man.gif";
import imagen2 from "../../Imagenes/technólogo.png";
import { MinusIcon } from "@chakra-ui/icons";
import { addMessage } from "../../Redux/actions";

const ChatBot = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [chatBotOpen, setChatBotOpen] = useState(false);

  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    const message = inputRef.current.value;
    dispatch(addMessage(message));
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChatBotClick = () => {
    setChatBotOpen(true);
    sendMessage("¡Novedades! Proximamente juntos a la IA, podremos resolver cualquier duda que tengas");
  };

  const handleMinimizeClick = () => {
    setChatBotOpen(false);
  };

  return (
    <div className="relative mr-10">
      {chatBotOpen && (
        <div className={`fixed w-96 ${location.pathname === "/" ? "bottom-32" : "bottom-10"} right-10`}>
          <div
            className="bg-gray-400 flex items-center justify-end mr-1 cursor-pointer"
            onClick={handleMinimizeClick}
          >
            <img
            className="w-12 h-12 mr-10"
            src={imagen2}/>
            <h3 className=" justify-center text-xl mr-10">Technólogo</h3>
            <MinusIcon className="ml-10 hover:bg-gray-200 w-3 h-3 mr-10" />
          </div>
          <div className="max-w-64 max-h-96 bg-white shadow-lg rounded-lg overflow-y-auto flex flex-col">
            <div
              className="max-h-400 w-300 overflow-y-auto"
              ref={chatContainerRef}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chat ${
                    index % 2 === 0 ? "chat-start" : "chat-end"
                  }`}
                >
                  <div className="chat-bubble">
                    {message.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto p-4">
              <form onSubmit={sendMessage} className="flex items-center">
                <input
                  className="flex-grow h-10 px-2 border border-gray-300 rounded-l-md"
                  ref={inputRef}
                  placeholder="Escribe un mensaje..."
                />
                <button
                  type="submit"
                  className="px-4 py-2 ml-2 bg-gray-500 text-white rounded-md"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {!chatBotOpen && (
        <div
          className="w-32 h-32 rounded-full bg-gray-500 flex items-center justify-center cursor-pointer"
          onClick={handleChatBotClick}
        >
          <img
            src={imagen}
            alt="Imagen de referencia"
            className="w-28 h-28 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
