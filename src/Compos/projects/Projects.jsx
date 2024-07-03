import { Link } from "react-router-dom";
import volunify from "../../assets/Volunify.png";
import { FiGithub } from "react-icons/fi";
import { LuArrowUpRightSquare } from "react-icons/lu";

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img className="rounded-e-2xl" src={volunify} alt="Album" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title font-bold text-2xl">Volunify</h2>
          <p>
            Voluntify is a platform that connects volunteers with organizations
            or individuals in need of volunteer assistance. It facilitates both
            volunteering opportunities and volunteer recruitment.
          </p>
          <div className="w-fit">
            <p className="mb-3 font-medium">Technologies used:</p>
            <div className="flex flex-wrap gap-3">
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">JavaScript</div>
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">Tailwind CSS</div>
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">React</div> <br />
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">Firebase</div>
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">Node.js</div>
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">Express.js</div>
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">JWT</div>
              <div className=" px-3 rounded-xl bg-[#DEFCF9]">MongoDB</div>
            </div>
          </div>
          <div className="card-actions justify-end mt-5">
            <Link
              target="_blank"
              to="https://github.com/mohsinahmedarfat/Volunify-client-side?tab=readme-ov-file"
              className="text-2xl"
            >
              <FiGithub />
            </Link>
            <Link
              target="_blank"
              to="https://volunify-2c546.web.app"
              className="text-2xl"
            >
              <LuArrowUpRightSquare />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
