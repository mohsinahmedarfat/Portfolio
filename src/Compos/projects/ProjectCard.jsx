import { FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  name,
  description,
  features,
  githubClient,
  githubServer,
  live,
}) => {
  return (
    <div className="card lg:card-side bg-base-100 drop-shadow-xl p-5 gap-5">
      <figure className="lg:w-1/2">
        <img className="rounded-2xl" src={image} alt="Album" />
      </figure>
      <div className="card-body p-0 lg:w-1/2">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <p>{description}</p>
        <div>
          <h3 className="mb-3 font-medium">Features and Characteristics:</h3>
          <ul className="list-disc *:ml-5">{features}</ul>
        </div>
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
        <div className="card-actions justify-end">
          <Link target="_blank" to={githubServer} className="text-2xl">
            <FaGithub />
          </Link>
          <Link target="_blank" to={githubClient} className="text-2xl">
            <FiGithub />
          </Link>
          <Link target="_blank" to={live} className="text-2xl">
            <LuArrowUpRightSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
