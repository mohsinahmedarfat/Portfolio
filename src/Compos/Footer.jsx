import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-content p-10 lg:px-20 xl:px-32">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <aside className="md:w-2/3 lg:w-1/2">
          <h3 className="text-2xl font-bold mb-3">Mohsin Ahmed Arfat</h3>
          <p>
            A passionate Web Developer specializing in creating dynamic and
            beautiful Web Applications.
          </p>
        </aside>
        <nav>
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
    </footer>
  );
};

export default Footer;
