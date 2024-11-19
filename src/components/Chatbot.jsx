import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';

const ChatBot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Xin chào! Tôi có thể giúp bạn tìm hiểu về sản phẩm không?' },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const { userInfo } = useSelector(state => state.auth);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const closeChat = () => {
        setIsChatOpen(false);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        
        if (userMessage.trim()) {
            setIsLoading(true);
            const newUserMessage = { sender: 'user', text: userMessage };
            
            setMessages(prev => [...prev, newUserMessage]);
            setUserMessage('');

            try {
              const response = await fetch('http://localhost:5000/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }), // Make sure to stringify the body
            });
            

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                
                setMessages(prev => [...prev, {
                    sender: 'bot',
                    text: data.response
                }]);
            } catch (error) {
                console.error('Error:', error);
                setMessages(prev => [...prev, {
                    sender: 'bot',
                    text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.'
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    };

    return (
        <div>
            {/* Chat Button */}
            <div
                onClick={toggleChat}
                className="fixed bottom-5 right-5 p-4 bg-[#059473] text-white rounded-full cursor-pointer hover:bg-[#048066] shadow-lg z-50"
            >
                <span className="text-xl">💬</span>
            </div>

            {/* Chat Window */}
            {isChatOpen && (
                <div className="fixed bottom-20 right-5 bg-white border rounded-lg shadow-xl w-96 max-w-[90vw] z-50">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b bg-[#059473] text-white rounded-t-lg">
                        <h3 className="font-bold text-lg">Tư vấn sản phẩm</h3>
                        <button
                            onClick={closeChat}
                            className="text-xl hover:text-gray-200"
                        >
                            ✖
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="h-[400px] overflow-y-auto p-4 space-y-3">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg ${
                                        message.sender === 'user'
                                            ? 'bg-[#059473] text-white'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-center">
                                <FadeLoader color="#059473" size={8} />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleSendMessage} className="p-4 border-t">
                        <div className="flex gap-2">
                            <textarea
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="flex-1 p-2 border rounded-lg resize-none focus:outline-none focus:border-[#059473]"
                                placeholder="Nhập tin nhắn..."
                                rows="2"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-4 py-2 bg-[#059473] text-white rounded-lg hover:bg-[#048066] disabled:opacity-50"
                            >
                                Gửi
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBot;