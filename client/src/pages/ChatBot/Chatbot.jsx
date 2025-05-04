import React, { useState } from "react";
import { MessageCircle, Send, XCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const ChatBot = ({ isOpen, setIsOpen }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 How can I help today?",
      sender: "bot",
    },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getAiResponse = async (newMessage) => {
    const response = await axios.post(
      "https://micro-task-marketplace.onrender.com/api/chatBot",
      {
        message: newMessage,
      }
    );
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");
    // Call AI response
    const data = await getAiResponse(newMessage);
    // Simulate bot response
    const botResponse = {
      id: messages.length + 2,
      text: data.data.Ai_response,
      sender: "bot",
    };
    setMessages((prev) => [...prev, botResponse]);
  };

  return (
    <div className="fixed bottom-8 right-7 z-50 flex flex-col items-end">
      <div
        className={`w-96 bg-white rounded-xl shadow-xl overflow-hidden opacity-0 max-h-0 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[520px] opacity-100" : ""
        }`}
      >
        <div className="bg-emerald-600 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle size={29} className="text-white" />
            <h1 className="text-white ml-2">MicroWork Chat Assistant</h1>
          </div>
          <XCircle
            size={26}
            className="text-emerald-200 cursor-pointer hover:text-white"
            onClick={toggleChat}
          />
        </div>
        <p className="text-xs text-gray-500 pl-12">Online now</p>

        <div className="border-t border-gray-200">
          <div className="p-4 max-h-[300px] overflow-y-auto bg-emerald-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] p-3 rounded-lg mb-3 ${
                  message.sender === "bot"
                    ? "bg-white shadow-md mr-auto border-l-4 border-emerald-500"
                    : "bg-slate-700 text-white ml-auto text-right"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 flex justify-between items-center border-t border-gray-200 bg-white"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 rounded-lg bg-emerald-50 border-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-emerald-600 p-2 cursor-pointer rounded-lg text-white ml-3 hover:bg-emerald-700"
          >
            <Send size={24} />
          </button>
        </form>
      </div>

      <button
        onClick={toggleChat}
        className="bg-emerald-600 cursor-pointer  hover:bg-emerald-700 w-16 h-16 rounded-full flex justify-center items-center text-white shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
      >
        {isOpen ? <XCircle size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatBot;
