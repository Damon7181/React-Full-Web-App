import NavbarComponent from "./navbar";
import FooterComponent from "./footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto bg-gray-50">
      {/* <header className="p-4  text-center">
        <div>
          <h1 className={`text-5xl font-bold `}>
            <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
              J
            </span>
            <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
              B
            </span>{" "}
            e
            <span
              className={`text-red-400 font-thin border-b-3 border-b-red-600 `}
            >
              S
              <span className={`text-black border-b-3 border-b-blue-800 `}>
                hop🛒
              </span>
            </span>
          </h1>
        </div>
      </header> */}
      <header>
        <NavbarComponent />
      </header>

      <main>{children}</main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}
