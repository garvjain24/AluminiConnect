import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PaymentGateway() {
  const location = useLocation();
  const { project } = location.state;
  const [qrCode, setQrCode] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const upiUrl = `upi://pay?pa=${project.upiId}&pn=${project.accountName}&cu=INR`;
    setQrCode(<QRCode value={upiUrl} />);
  }, [project]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Payment Gateway</h1>
        <p className="mb-4">Scan the QR code to make a payment</p>
        <div className="p-4 bg-gray-200 rounded-lg">
          {qrCode}
        </div>
        <a href={`upi://pay?pa=${project.upiId}&pn=${project.accountName}&cu=INR`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Pay Now!
        </a>
        <button onClick={() => navigate('/')} className="mt-4 bg-gray-500 text-white mr-2 py-2 px-4 rounded-lg hover:bg-gray-600">
          Back
        </button>
      </div>
    </div>
  );
}