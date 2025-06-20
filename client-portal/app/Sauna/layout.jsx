import NavbarComponent from "./navbar";
import FooterComponent from "./footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto bg-gray-50">
      {/* <header>
        <NavbarComponent />
      </header> */}

      <main>{children}</main>
      {/* <footer>
        <FooterComponent />
      </footer> */}
    </div>
  );
}
