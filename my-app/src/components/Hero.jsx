import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

const Dashboard = () => {
  const features = [
    {
      title: "Shooting Stars",
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    },
    {
      title: "The Catalyzer",
      icon: (
        <>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
        </>
      ),
    },
    {
      title: "Neptune",
      icon: (
        <>
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </>
      ),
    },
    // {
    //   title: "Melanchole",
    //   icon: (
    //     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
    //   ),
    // },
    // {
    //   title: "Bunker",
    //   icon: <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />,
    // },
    // {
    //   title: "Ramona Falls",
    //   icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    // },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Navbar />

        <main className="flex flex-1 flex-grow overflow-y-auto   p-4">
          <section className="text-gray-600 body-font w-full">
            <div className="container px-5 mx-auto w-full">
              <div>
                <h1 className="text-4xl text-zinc-950 font-bold">
                  Welcome back, User!
                </h1>
                <p>
                  &nbsp;Here's a{" "}
                  <span className="text-blue-400 font-bold">
                    <em> quick summary</em>
                  </span>{" "}
                  of your store's activity.
                </p>
              </div>
              <div className="flex flex-wrap flex-grow ">
                {features.map((feature, index) => (
                  <div key={index} className="xl:w-1/3 md:w-1/2 p-4 ">
                    <div className=" border border-gray-400 p-6 rounded-lg hover:shadow shadow-blue-500 group">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 group-hover:bg-blue-900 group-hover:text-amber-50">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          {feature.icon}
                        </svg>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-blue-900">
                        {feature.title}
                      </h2>
                      <p className="leading-relaxed text-base group-hover:text-blue-950">
                        Fingerstache flexitarian street art 8-bit waist co,
                        subway tile poke farm.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
