"use client";
import Link from "next/link";
import { LandingNav } from "./components/LandingNav";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side with white-to-blue gradient background */}
      <div className="w-1/2 relative overflow-hidden">
        {/* Updated gradient from top-left */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, #e6f0ff 0%, #0066ff 100%)",
          }}
        ></div>

        <div className="relative h-full flex flex-col justify-between p-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-blue-600 font-medium text-2xl">CuraEase</span>
          </div>

          {/* Center content with illustration/image */}
          <div className="flex justify-center items-center relative">
            <div className="relative">
              {/* Image component */}
              <div className="w-64 h-64 relative">
                <Image
                  src="/img/tg.png"
                  alt="CuraEase Healthcare"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = "/api/placeholder/400/400";
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10">
                
              </div>
            </div>
          </div>

          {/* Copyright footer */}
          <div className="text-blue-800 text-xs">
            Copyright © 2024 CuraEase. All rights reserved
          </div>
        </div>
      </div>

      {/* Right side with main content */}
      <div className="w-1/2 bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-blue-500 text-5xl">CuraEase</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              The smart healthcare management platform that simplifies your medical
              journey.
            </p>
          </div>

          {/* Form section with blue buttons and orange hover */}
          <div className="space-y-4">
            <Link
              href="/auth/signup"
              className="block w-full py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-orange-500 transition-colors text-center text-lg"
            >
              Patients Start Here
            </Link>

            <Link
              href="/auth/doctor-signup"
              className="block w-full py-3 border border-blue-500 text-blue-500 font-medium rounded-md hover:bg-orange-50 hover:text-orange-500 hover:border-orange-500 transition-colors text-center text-lg"
            >
              Doctors Sign Up
            </Link>

            <div className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="text-blue-500 hover:text-orange-500"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Social icons footer */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              className="p-2 rounded-full border border-gray-200 hover:border-orange-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </button>
            <button
              className="p-2 rounded-full border border-gray-200 hover:border-orange-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                />
              </svg>
            </button>
            <button
              className="p-2 rounded-full border border-gray-200 hover:border-orange-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}