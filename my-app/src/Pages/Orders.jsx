import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="text-gray-600 w-full">
      <div className="container px-5 mx-auto w-full">
        <div>
          <h1 className="flex text-4xl text-zinc-950 font-bold">
            <span className="">🛒</span>
            &nbsp;Orders Management
          </h1>
          <p>Manage all your orders integrations and website data.</p>
        </div>

        <div className="flex flex-wrap">
          {orders.map((order, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/3 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-sm ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  🧾
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
