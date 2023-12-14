import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer xl:px-24 py-10 px-4 p-10 text-base-content">
        <aside>
          <img src="/logo.png" alt=""/>
          <p className="my-5 md:w-40 text-[#555] ">
           Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav className="">
          <header className="footer-title text-black font-bold">Useful Links</header>
          <div className="flex flex-col gap-3">
          <a className="link link-hover text-[#555]">About Us</a>
          <a className="link link-hover text-[#555]">Events</a>
          <a className="link link-hover text-[#555]">Blogs</a>
          <a className="link link-hover text-[#555]">FAQ</a>
          </div>
        </nav>
        <nav >
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
