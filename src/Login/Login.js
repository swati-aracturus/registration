import React from 'react'
import "../Login/Login.css"
import image2 from "../images/image2.png"
import hand from "../images/hand.png"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>

            <div className="bg-gradient-to-r from-cyan-400 to-sky-400 min-h-screen flex items-center justify-center">
                <div className="hidden md:flex w-2/3 items-center justify-center h-4/5 ">
                    <div className="bg-white rounded-lg w-2/3  h-2/3 p-6 h-full flex flex-col justify-center">
                        <div className="flex justify-center mb-4">
                            <img src={image2} alt="My SVG" width={100} height={100} />
                        </div>
                        <div className="flex justify-center mb-4">
                            <img src={image2} alt="Image" width={500} height={250} />
                        </div>
                        <div className="flex items-center justify-center mb-2">
                            <svg width={36} height={46} viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 23C9.94113 23 18 12.7025 18 0C18 12.7025 26.0589 23 36 23C26.0589 23 18 33.2975 18 46C18 33.2975 9.94113 23 0 23Z" fill="#02A7CC" />
                            </svg>
                            <div className="font-extrabold text-slate-900 text-4xl ml-2">Hello, Igniculuss</div>
                            <img src={hand} alt="Hand" width={50} height={50} className="ml-2" />
                        </div>
                        <div className="text-center text-base leading-6 text-slate-500 mb-10">
                            Skip repetitive and manual sales-marketing tasks. Get highly productive through automation and save tons
                            of time!
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-screen min-h-690px bg-white flex items-center justify-center">
                    <div className="w-2/3 max-w-container">
                        <div className="my-12 lg:mb-8 flex items-center gap-1">
                            <svg width={32} height={40} viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z" fill="#282828" />
                            </svg>
                            <span className="text-slate-950 font-bold text-2xl">Log In</span>
                        </div>
                        <form className="grid space-y-6" id="myForm">
                            <div>
                                <label className="text-slate-800 pb-2 block">User Name</label>
                                <input type="text" id="username" required className="h-10 rounded-md px-3 py-2 border text-xs focus:outline-none w-full" placeholder="User Name" />
                            </div>
                            <div>
                                <label className="text-slate-800 pb-2 block">Password</label>
                                <input type="password" id="password" required className="h-10 rounded-md px-3 py-2 border text-xs focus:outline-none w-full" placeholder="12345678" />
                            </div>
                            <button type="submit" className="h-11 font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-lg rounded-md">Submit</button>
                            <div className="relative text-center py-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative inline-block px-4 bg-white text-slate-800">Or log in with</div>
                            </div>
                            <button className="h-11 flex items-center justify-center font-medium text-gray-700 text-medium rounded-md border border-gray-300">
                                <svg width="16px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                                    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                                    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
                                    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
                                </svg>
                                &nbsp; Continue with Google
                            </button>
                            <div className="text-center text-sm text-gray-600">
                                Don’t have an Account?
                               <Link to="registration" className="font-semibold text-sm text-blue-700 no-underline"> Create Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </>
    )
}
