import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import './css/ChatPage.css'


const ChatPage = () => {
    const ENDPOINT = 'http://localhost:3001'; // Reemplaza esta URL con la URL de tu servidor de Socket.IO

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null); // Mensaje seleccionado para responder
    
    // Ref para acceder al contenedor de mensajes
    const messagesEndRef = useRef(null);
    
    useEffect(() => {
        scrollToBottom();
        // Conectar al servidor de WebSocket en el puerto 3001
        const socket = socketIOClient(ENDPOINT);
        // Escuchar mensajes entrantes del servidor
        socket.on('chat message', (message) => {
            setMessages([...messages, message]);
        });

        return () => socket.disconnect(); // Desconectar el socket al desmontar el componente
    }, [messages]);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        const socket = socketIOClient(ENDPOINT);
        socket.emit('chat message', { text: message, origin: 'admin' }); // Enviar el mensaje al servidor como respuesta al mensaje seleccionado
        setMessage(''); // Limpiar el input de mensaje
        setSelectedMessage(null); // Limpiar el mensaje seleccionado
    };

    const handleSelectMessage = (msg) => {
        setSelectedMessage(msg); // Establecer el mensaje seleccionado como el mensaje al que se responderá
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='chatbox_container'>
            <div className="chatbox_header_container">
                <div className="chatbox_avatar_container">
                    <i className='bx bxs-bot chatbox_avatar_header'></i>
                </div>
                <div className="chatbox_state_user_container">
                    <div className="chatbox_title_container">
                        <span className='chatbox_title'>Chat Everchic</span>
                    </div>
                    <div className="chatbox_state_container">
                        <div className="chatbox_circle_state"></div>
                        <span className='chatbox_state'>Online</span>
                    </div>
                </div>
            </div>
            <div className="chatbox_body_container">
                <div className="chatbox_avatar_messaje_user">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chatbox_text_${msg.sender} chatbox_text_container`} onClick={() => handleSelectMessage(msg)}>
                            <div className={`chatbox_avatar_messaje_${msg.sender} chatbox_avatar_msj_container`}><i className='bx bxs-bot chatbox_avatar_msj'></i></div>
                            <div className={`chatbox_text_${msg.sender} chatbox_msj`}>{msg.text}</div>
                        </div>
                    ))}
                    {/* Ref para scroll automático al final */}
                    <div ref={messagesEndRef} />
                </div>
                <div className="chatbox_text_admin_container">
                    <div className="chatbox_avatar_messaje_admin"></div>
                    
                </div>
            </div>
            <div className="chatbox_messaje_write_container">
                <div className="chatbox_messaje_input_user_container">
                    <input
                        className="chatbox_messaje_input_user_messaje"
                        type="text"
                        placeholder={selectedMessage ? `Responder a: ${selectedMessage.text}` : "Escribe tu mensaje..."}
                        value={message}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="chatbox_icon_send_container">
                    <i className='bx bxs-send button_send_messaje' onClick={handleSendMessage}></i>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
