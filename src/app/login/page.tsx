'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted', { email, password });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-16 w-full max-w-[1305px] mx-auto min-h-screen p-6 lg:p-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <Image
          src="/images/signup.png"
          alt="sign-up"
          width={805}
          height={781}
          className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[805px]"
        />
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
      >
        <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold mb-4 text-center lg:text-left">
          Log in to Exclusive
        </h1>
        <span className="text-[14px] sm:text-[16px] text-gray-500 mb-8 text-center lg:text-left">
          Enter your details below
        </span>

        {/* Email Input */}
        <div className="w-full max-w-[370px] mb-6">
          <label className="text-sm font-medium text-gray-600">Email or Phone Number</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-black w-full pb-2 mt-1 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="w-full max-w-[370px] mb-6">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b border-black w-full pb-2 mt-1 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full sm:w-[143px] h-[48px] sm:h-[56px] bg-[#44bddb] text-[#FAFAFA] rounded-md"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInPage;
