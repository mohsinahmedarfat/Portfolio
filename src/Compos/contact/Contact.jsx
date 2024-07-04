import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Contact me</h1>
      <div>
        <h1>
          <strong>Email:</strong> mohsinarfat53@gmail.com
        </h1>
        <h1>
          <strong>Phone:</strong> +880 1928-820908
        </h1>
        <div className="flex gap-3 mt-2">
          <strong>Social:</strong>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
