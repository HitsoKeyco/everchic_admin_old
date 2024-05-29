import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const QrImage = () => {
    const ENDPOINT = 'http://localhost:3001'; // Reemplaza esta URL con la URL de tu servidor de Socket.IO

    const [qrCode, setQRCode] = useState('');

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT); // Cambia la URL por la de tu servidor
        socket.on('qrCode', qrCodeData => {
            setQRCode(qrCodeData);
        });

        return () => socket.disconnect();
    }, [qrCode]);

    return (
        <div>
            <h3 className='qr_image_title'>Qr emit SocketIo</h3>
            {qrCode && <img src={qrCode} alt="QR Code" />}
            
        </div>
    );
};

export default QrImage;
