import {MagnifyingGlassCircleIcon} from "@heroicons/react/24/outline";
export default function Products() {
  return (
    <>
      <section className=" flex flex-1 flex-col bg-zinc-100 rounded-2xl p-4">
        <div className="heading">
          <h1 className="font-bold text-2xl">Product Mangement</h1>
          <p className="text-grey">Showing Products</p>
        </div>
        <div className="search-section mt-8">
          <input
            type="search"
            placeholder=" Search Products ..."
            className=" w-full "
          />
        </div>
      </section>
    </>
  );
}
