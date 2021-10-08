import React, { Fragment } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <Fragment>
      <div
        className="fixed hidden inset-0 z-40 md:hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* <!-- */}
        {/* Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
        <div
          className="fixed inset-0 bg-blue-600 bg-opacity-75"
          aria-hidden="true"
        ></div>

        {/* <!-- */}
        {/* Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    --> */}
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          {/* <!-- */}
          {/* Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close sidebar</span>
              {/* <!-- Heroicon name: outline/x --> */}
              <svg
                className="h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-blue-800-text.svg"
                alt="Workflow"
              />
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {/* <!-- Current: "bg-blue-100 text-blue-900", Default: "text-blue-600 hover:bg-blue-50 hover:text-blue-900" --> */}
              <a
                href="#"
                className="bg-blue-100 text-blue-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {/* <!-- */}
                {/* Heroicon name: outline/home

              Current: "text-blue-500", Default: "text-blue-600 group-hover:text-blue-500"
            --> */}
                <svg
                  className="text-blue-500 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </a>

              <a
                href="#"
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {/* <!-- Heroicon name: outline/users --> */}
                <svg
                  className="text-blue-600 group-hover:text-blue-500 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Team
              </a>

              <a
                href="#"
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {/* <!-- Heroicon name: outline/folder --> */}
                <svg
                  className="text-blue-600 group-hover:text-blue-500 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                Projects
              </a>

              <a
                href="#"
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {/* <!-- Heroicon name: outline/calendar --> */}
                <svg
                  className="text-blue-600 group-hover:text-blue-500 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Calendar
              </a>

              <a
                href="#"
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {/* <!-- Heroicon name: outline/inbox --> */}
                <svg
                  className="text-blue-600 group-hover:text-blue-500 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                Documents
              </a>

              <a
                href="#"
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {/* <!-- Heroicon name: outline/chart-bar --> */}
                <svg
                  className="text-blue-600 group-hover:text-blue-500 mr-4 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Reports
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-blue-200 p-4">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-blue-700 group-hover:text-blue-900">
                    Tom Cook
                  </p>
                  <p className="text-sm font-medium text-blue-500 group-hover:text-blue-700">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 w-14">
          {/* <!-- Force sidebar to shrink to fit close icon --> */}
        </div>
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-blue-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="./images/logo-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {/* <!-- Current: "bg-blue-100 text-blue-900", Default: "text-blue-600 hover:bg-blue-50 hover:text-blue-900" --> */}
                <Link
                  to="/"
                  className="bg-blue-100 text-blue-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  {/* <!-- */}
                  {/* Heroicon name: outline/home

                Current: "text-blue-500", Default: "text-blue-600 group-hover:text-blue-500"
              --> */}
                  <svg
                    className="text-blue-500 mr-3 flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </Link>

                <Link
                  to="/user-profiles"
                  className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  {/* <!-- Heroicon name: outline/users --> */}
                  <svg
                    className="text-blue-600 group-hover:text-blue-500 mr-3 flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  User Profiles
                </Link>

                <Link
                  to="/revenue"
                  className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  {/* <!-- Heroicon name: outline/folder --> */}
                  <svg
                    className="text-blue-600 group-hover:text-blue-500 mr-3 flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Revenue
                </Link>

                <Link
                  to="/disputes"
                  className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  {/* <!-- Heroicon name: outline/calendar --> */}
                  <svg
                    className="text-blue-600 group-hover:text-blue-500 mr-3 flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Disputes
                </Link>

                <Link
                  to="btc-transfers"
                  className="text-blue-600 hover:bg-blue-50 hover:text-blue-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  {/* <!-- Heroicon name: outline/chart-bar --> */}
                  <svg
                    className="text-blue-600 group-hover:text-blue-500 mr-3 flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  BTC Transfers
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-blue-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-600 group-hover:text-blue-500">
                      Tom Cook
                    </p>
                    <p className="text-xs font-medium text-blue-500 group-hover:text-blue-600">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
