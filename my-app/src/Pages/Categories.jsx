import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

export default function Categories() {
  const features = [
    {
      title: "Shooting Stars",
      image:
        "https://nordicasauna.com/cdn/shop/files/DCT-SY-06-HC-1A-1-scaled_800x.jpg?v=1734462026",
    },
    {
      title: "The Catalyzer",
      image:
        "https://nordicasauna.com/cdn/shop/files/DCT-SY-06-HC-1A-1-scaled_800x.jpg?v=1734462026",
    },
    {
      title: "Neptune",
      image:
        "https://nordicasauna.com/cdn/shop/files/DCT-SY-06-HC-1A-1-scaled_800x.jpg?v=1734462026",
    },
    {
      title: "Shooting Stars",
      image:
        "https://nordicasauna.com/cdn/shop/files/DCT-SY-06-HC-1A-1-scaled_800x.jpg?v=1734462026",
    },
  ];

  return (
    <>
      <section className="text-gray-600 w-full">
        <div className="container px-5 mx-auto w-full">
          <div>
            <h1 className="text-4xl text-zinc-950 font-bold underline">
              Categories Management
            </h1>
          </div>
          <div className="button-div flex justify-end items-end">
            <button className="bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-900">
              + Add Category
            </button>
          </div>
          <div className="flex flex-wrap mt-5">
            {features.map((feature, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="relative shadow-all1 p-6 rounded-2xl hover:shadow shadow-blue-500  flex flex-col items-center text-center">
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="text-gray-600 rounded-full p-1 shadow-icon hover:text-blue-700 hover:bg-blue-100">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 rounded-full p-1 shadow-icon hover:text-red-600 hover:bg-red-100">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-32 h-32 mb-4  group-hover:border-blue-500"
                  />
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
        </div>
      </section>
    </>
  );
}
