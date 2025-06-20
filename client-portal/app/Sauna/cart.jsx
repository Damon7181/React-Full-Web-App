"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaLinkedinIn, label: "LinkedIn" },
    { Icon: FaTwitter, label: "Twitter" },
    { Icon: FaInstagram, label: "Instagram" },
  ];
  return (
    <footer className="bg-blue-950 text-white px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Social */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            JinnByte <br /> JB eShop{" "}
            <span className="text-sm font-light">(Child Company)</span>
          </h2>
          <br />
          <p className="font-semibold mb-2">Follow Us On</p>
          <div className="flex space-x-3">
            {socialIcons.map(({ Icon, label }) => (
              <div
                key={label}
                className="border border-white p-2 rounded hover:bg-white hover:text-black transition"
              >
                <Icon className="h-5 w-5" aria-label={label} />
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Popular Products</a>
            </li>
            <li>
              <a href="#">Popular Comparisons</a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Get in touch</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Suggest a product</a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-2">LEGAL</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Imprint</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Affiliate Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-100 pt-4 text-sm text-gray-400">
        © 2017 JinnByte. All rights reserved.
      </div>
    </footer>
  );
}
