import { useEffect, useState } from "react";
import axios from "axios";
import {
  MagnifyingGlassIcon,
  TrashIcon,
  PencilIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="text-gray-600 w-full bg-blue-50 rounded-2xl">
      <div className="container px-5 mx-auto w-full">
        <div>
          <h1 className="flex text-2xl text-zinc-950 font-bold mt-5">
            <span className="">🛒</span>
            &nbsp;Orders Management
          </h1>
          <p className="text-grey">Manage all your orders integrations and website data.</p>
        </div>
        <div className="flex search-section mt-8 gap-6">
        <div className="relative icon w-4xl min-w-[850px]">
          <span className="absolute left-1.5 top-1.5 text-gray-500">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </span>
          <input
            type="search"
            placeholder="Search Orders ..."
            className="text-grey border border-gray-400 rounded-xl h-8 min-w-full pl-10 focus:outline-none focus:border-3 focus:border-blue-900"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              // setCurrentPage(0);
            }}
          />
        </div>

      </div>
        {/* <div className="flex flex-wrap">
          {orders.map((order, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/3 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-sm bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  O
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {order.title}
                </h2>
                <p className="leading-relaxed text-base">{order.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap">
  {filteredOrders.map((order, index) => (
    <div key={index} className="xl:w-1/4 md:w-1/3 p-4">
      <div className="border border-gray-200 p-6 rounded-lg hover:shadow-sm bg-white">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          O
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {order.title}
        </h2>
        <p className="leading-relaxed text-base">{order.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Orders;
