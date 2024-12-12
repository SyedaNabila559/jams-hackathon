'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignUpPage = () => {
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
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold mb-4 text-center lg:text-left">
          Create an account
        </h1>
        <span className="text-[14px] sm:text-[16px] text-gray-500 mb-8 text-center lg:text-left">
          Enter your details below
        </span>

        {/* Name Input */}
        <div className="w-full max-w-[370px] mb-4">
          <label className="text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            className="border-b border-black w-full pb-2 mt-1 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="w-full max-w-[370px] mb-4">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="border-b border-black w-full pb-2 mt-1 focus:outline-none"
          />
        </div>

        {/* Create Account Button */}
        <button className="w-full max-w-[370px] h-[56px] bg-[#449fdb] text-white rounded-md mb-4 shadow-md hover:bg-[#44bddb] transition">
          Create Account
        </button>

        {/* Google Sign Up Button */}
        <button className="w-full max-w-[370px] h-[56px] border border-gray-600 flex items-center justify-center gap-4 rounded-md mb-6 hover:shadow-lg transition">
          <Image
            src="/images/google.png"
            width={24}
            height={24}
            alt="google-icon"
          />
          <span>Sign up with Google</span>
        </button>

        {/* Login Option */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span>Already have an account?</span>
          <Link href="/login">
            <span className="border-b border-black pb-1 cursor-pointer hover:text-black">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
