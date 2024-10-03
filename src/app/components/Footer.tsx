import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="w-[90%] m-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section - Logo and Description */}
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <img
              src="/asset/Frame 6.svg"
              alt="Cirqura logo"
              className=" mb-4"
            />
            <p className="text-gray-600 w-2/3">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {/* Middle Section - Product & Resources Links */}
          <div className="flex flex-wrap lg:w-1/3">
            <div className="w-1/2 mb-6 lg:mb-0">
              <h4 className="text-gray-800 font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Solutions{" "}
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                      New
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Releases
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/2">
              <h4 className="text-gray-800 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Help Centre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Subscribe Form */}
          <div className="lg:w-1/3">
            <h4 className="text-gray-800 font-semibold mb-4">
              Stay up to date
            </h4>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center lg:text-left">
          <p className="text-sm text-gray-500">
            © 2077 Cirqura. All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-2 text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
