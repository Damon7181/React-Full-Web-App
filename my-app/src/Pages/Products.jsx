import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {
  MagnifyingGlassIcon,
  TrashIcon,
  PencilIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const pageCount = Math.ceil(products.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="flex flex-1 flex-col bg-zinc-100 rounded-2xl p-4">
      <div className="heading">
        <h1 className="font-bold text-2xl">Product Mangement</h1>
        <p className="text-grey">Showing Products</p>
      </div>

      <div className="flex search-section mt-8 gap-6">
        <div className="relative icon w-4xl min-w-[850px]">
          <span className="absolute left-1.5 top-1.5 text-gray-500">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </span>
          <input
            type="search"
            placeholder="Search Products ..."
            className="text-grey border border-gray-400 rounded-xl h-8 w-full pl-10 focus:outline-none focus:border-3 focus:border-blue-900"
          />
        </div>

        <select className="text-grey border border-gray-400 focus:outline-none focus:border-3 focus:border-blue-900 rounded-xl w-full min-w-[220px]">
          <option value="">All Categories</option>
          <option value="">Saunas</option>
          <option value="">Smart Rings</option>
          <option value="">Ice Baths</option>
          <option value="">Massage Guns</option>
        </select>

        <a
          href="/FormForProduct"
          className="flex bg-blue-500 text-white p-1 rounded-sm hover:bg-blue-900 w-full min-w-[70px] justify-center items-center"
        >
          <span className="pr-1">+</span> Add Product
        </a>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-8 py-3">Product</th>
              <th className="text-left px-3 py-2">Pricing</th>
              <th className="text-left px-8 py-2">Specifications</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-5 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {currentItems.map((product, index) => (
              <tr
                key={index}
                className="border border-gray-400 hover:bg-gray-150 text-sm"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-12 h-12 rounded-md"
                    />
                    <div>
                      <p className="text-dark">{product.name}</p>
                      <a
                        className="text-xs text-blue-600 hover:underline cursor-pointer"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Product
                      </a>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-4">
                  <p className="text-dark">{product.price}</p>
                  <p className="text-grey line-through text-gray-400">
                    {product.originalPrice}
                  </p>
                </td>
                <td className="px-4 py-4 text-grey">
                  <p>
                    <span className="text-dark">Maximum Temperature:</span>{" "}
                    {product.maxTemperature ?? "75°C"}
                  </p>
                  <p>
                    <span className="text-dark">Materials And Build:</span>{" "}
                    {product.material ?? "Hemlock Wood..."}
                  </p>
                  <p>
                    <span className="text-dark">EMF Emission:</span>{" "}
                    {product.emfEmission ?? "Low EMF"}
                  </p>
                </td>
                <td className="px-2 py-4 text-sm">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-300 text-grey">
                    {product.status ?? "No Review"}
                  </span>
                  <p className="px-4 py-1 text-xs text-gray-500 mt-1">
                    Views: {product.views ?? 0}
                  </p>
                </td>
                <td className="px-4 py-8 flex space-x-3 text-grey">
                  <button className="hover:text-blue-600">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button className="hover:text-green-600">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="hover:text-red-600">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactPaginate
          breakLabel="..."
          nextLabel="→"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="←"
          containerClassName="flex justify-center mt-4 space-x-2"
          pageClassName="px-3 py-1 border rounded hover:bg-blue-200"
          activeClassName="bg-blue-500 text-white"
          previousClassName="px-3 py-1 border rounded"
          nextClassName="px-3 py-1 border rounded"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </section>
  );
}
