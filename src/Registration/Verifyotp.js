import React from 'react'
import verify from "../images/verify.png"
import image2 from "../images/image2.svg"
import hand from "../images/hand.png"

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default function Verifyotp() {
  const { email } = useParams()
  const [userEmail, setUserEmail] = useState(email || '');// Set this to the user's email
  const [otp, setOtp] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [otpSentMessage, setOtpSentMessage] = useState('');

  const showToast = (message, backgroundColor) => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: backgroundColor,
      stopOnFocus: true,
    }).showToast();
  };


  useEffect(() => {
    let timer;
    if (resendDisabled) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setResendDisabled(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendDisabled]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formValues = {
      emailid: userEmail,
      otp: otp
    };

    try {
      const response = await axios.post('https://stratagem.igniculuss.com/api/Users/verify/otp', formValues);
      if (response.data.status === 200) {
        setUserEmail(userEmail);
        showToast(response.data.message, "#FF0000");
        window.location.href = '/upload';
      } else {
        setOtp(response.data.data.errors)
        showToast(response.data.message, "#FF0000");
      }

    } catch (error) {
      console.error('Error:', error);

    }
  };
  const handleResend = async (event) => {
    event.preventDefault();

    console.log('Resending OTP to:', userEmail); // Log the email being sent

    try {
      const response = await axios.post('https://stratagem.igniculuss.com/api/Users/send/otp', { Email: userEmail });
      if (response.data.status === 200) {

        setUserEmail(userEmail);
        alert('OTP has been sent to ' + userEmail);
        setOtpSentMessage('OTP has been sent!');
        setResendDisabled(true);
      } else {
        alert('Failed to resend OTP');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to resend OTP: ' + error.message);
    }

  };

  return (
    <div className="bg-gradient-to-r from-cyan-400 to-sky-400 min-h-screen flex items-center justify-center">
      <div className="hidden md:flex w-2/3 items-center justify-center">
        <div className="bg-white rounded-lg w-2/3 p-6">
          <div className="flex justify-center mb-4">
            <img src={image2} alt="My SVG" width={100} height={100} />
          </div>
          <div className="flex justify-center mb-4">
            <img src={verify} alt="Image" width={500} height={250} />
          </div>
          <div className="flex items-center justify-center mb-2">
            <svg width={36} height={46} viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 23C9.94113 23 18 12F.7025 18 0C18 12.7025 26.0589 23 36 23C26.0589 23 18 33.2975 18 46C18 33.2975 9.94113 23 0 23Z" fill="#02A7CC" />
            </svg>
            <div className="font-extrabold text-slate-900 text-4xl ml-2">Hello, Igniculuss</div>
            <img src={hand} alt="Hand" width={50} height={50} className="ml-2" />
          </div>
          <div className="text-center text-base leading-6 text-slate-500 mb-10">
            Skip repetitive and manual sales-marketing tasks. Get highly productive through automation and save tons of time!
          </div>
        </div>
      </div>
      <div className="w-1/3 min-h-screen flex items-center bg-white justify-center py-6">
        <div className="w-2/3 max-w-container">
          <a href="/" className="mt-12 flex items-center gap-1">
            <svg width={32} height={40} viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z" fill="#282828" />
            </svg>
            <span className="text-slate-950 font-bold text-2xl py-6">Verify Your Sign-up</span>
          </a>
          <div className="text-slate-800 text-sm">
            Enter the one-time password sent to your Email ID: <span>{userEmail}</span>
          </div>
          <div className="mx-auto">
            <form className="grid space-y-6" onSubmit={!resendDisabled ? handleSubmit : null}>
              <div className="flex justify-end py-2">
                <div className="text-right text-cyan-600 no-underline">
                  <a href="/change">Change</a>
                </div>
              </div>

              <input
                type="number"
                required
                className="h-10 rounded-md px-3 border text-xs focus:outline-none"
                style={{ margin: 0, border: '1px solid #D5D5D5' }}
                placeholder="XXX XXX"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className="flex justify-between m-0 pb-12">
                <div
                  className={`text-left text-slate-950 cursor-pointer ${resendDisabled ? 'disabled' : ''}`}
                  onClick={!resendDisabled ? handleResend : null}
                >
                  {resendDisabled ? `Resend in ${countdown}s` : 'Resend in'}
                </div>
                <a>
                  <div className="text-right text-cyan-600 no-underline">
                    Choose Other Way
                  </div>
                </a>
              </div>
              <button className="h-11 w-full font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-base rounded-md" type="submit">
                Verify
              </button>
              <div className="text-center text-sm pb-12 font-medium text-gray-600">
                {otpSentMessage && <div id="otpSentMessage" style={{ color: 'green', marginTop: 10 }}>{otpSentMessage}</div>}
              </div>
            </form>
            {/* <div
              className={`text-left text-slate-950 cursor-pointer ${resendDisabled ? 'disabled' : ''}`}
              onClick={handleResend}
            >
              {resendDisabled ? `Resend in ${countdown}s` : 'Resend'}
            </div> */}
          </div>
        </div>
      </div>
    </div>

  )
}
