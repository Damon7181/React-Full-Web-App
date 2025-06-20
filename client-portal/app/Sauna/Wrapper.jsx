"use client";
import NavbarComponent from "./navbar";
import FooterComponent from "./footer";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "./layout";

export default function SaunaWrapper({ children }) {
  return (
    <Provider store={store}>
      <header>
        <NavbarComponent />
      </header>

      <Layout>{children}</Layout>
      <footer>
        <FooterComponent />
      </footer>
    </Provider>
  );
}
