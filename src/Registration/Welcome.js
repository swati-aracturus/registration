import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

  const [companyData, setCompanyData] = useState({ name: '', tenentLogo: '' });

  useEffect(() => {
    const storedData = localStorage.getItem('companyData');
    const data = storedData ? JSON.parse(storedData) : null;
    console.log('Company data not found>>>.', data?.tenentLogo);
    console.log('Company data not found>>>______', companyData.tenentLogo);
    if (data) {
      setCompanyData(data);
    } else {
      console.warn('Company data not found.');
    }
  }, []);

  return (
    <div className="desktop bg-gradient-to-r from-cyan-400 to-sky-400">
      <div className="flex w-[700] min-h-screen justify-center items-center">
        <div className="hidden lg:block">
          <div className="rounded-3xl my-12 py-6 bg-white relative" style={{ width: '100%' }}>
            <div className="absolute w-24 top-28">
              <img src="images/Union (1).png" alt="" />
            </div>
            <div className="absolute w-24 top-28 right-0">
              <img src="images/Union.png" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img
                id="logoImg"
                src={companyData.tenentLogo ? `${companyData.tenentLogo}` : "/images/image 35.png"}
                alt="Company Logo"
                className="pt-4 rounded-full object-contain"
                style={{ height: '100px', width: '100px' }}
              />
            </div>
            <div className="flex justify-center pt-12">
              <div className="font-extrabold text-sky-600 text-5xl">
                Welcome
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center leading-6 w-[430px] py-2 text-xl text-slate-500 font-medium">
                <p id="companyName">{companyData.name}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center text-base leading-6 w-[430px] pt-2 pb-2 text-slate-500">
                Business Solution
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="h-11 font-medium bg-cyan-400 hover:bg-cyan-500 text-base text-gray-100 px-12 my-8 rounded-md w-72">
                <Link to="/home">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
