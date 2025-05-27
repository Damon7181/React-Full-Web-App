import Barchart from "../components/Barchart";
import Linechart from "../components/Linechart";
const Home = () => {
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
  ];

  return (
    <section className=" text-gray-600 w-full">
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
        <div className="flex flex-wrap ">
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
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16 mt-6 px-5">
          <div className="bg-white p-4 shadow-[-4px_0_2px_rgba(0,0,0,0.1)] rounded">
            <Barchart />
          </div>
          <div className="bg-white p-4 shadow-[-4px_0_2px_rgba(0,0,0,0.1)] rounded">
            <Linechart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
