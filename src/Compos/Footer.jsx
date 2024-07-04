import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-content pt-10 px-5 lg:px-10 xl:px-20">
      <div>
        <div className="flex flex-col md:flex-row gap-10 mb-10 justify-between">
          <aside className="md:w-2/3 lg:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Mohsin Ahmed Arfat</h3>
            <p>
              A passionate Web Developer specializing in creating dynamic and
              beautiful Web Applications.
            </p>
          </aside>
          <nav>
            <div className="mb-5">
              <h6 className="footer-title">Contact</h6>
              <h1>
                <strong>Email:</strong> mohsinarfat53@gmail.com
              </h1>
              <h1>
                <strong>Phone:</strong> +880 1928-820908
              </h1>
            </div>
            <h6 className="footer-title">Social</h6>
            <div className="flex gap-4">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/mohsin-ahmed-arfat"
                className="text-2xl"
              >
                <FaLinkedin />
              </Link>
              <Link
                target="_blank"
                to="https://github.com/mohsinahmedarfat"
                className="text-2xl"
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com/mohsin.ahmed.arfat"
                className="text-2xl"
              >
                <FaFacebook />
              </Link>
            </div>
          </nav>
        </div>

        <hr className="border border-slate-500" />
        <p className="text-center text-xs text-slate-400 py-5">
          Copyright © 2024 - All right reserved by Mohsin Ahmed Arfat
        </p>
      </div>
    </footer>
  );
};

export default Footer;
