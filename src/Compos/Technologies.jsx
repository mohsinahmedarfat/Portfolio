import jwt from "../assets/jwt.svg";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-10">Technologies I&apos;ve used</h2>

      {/* <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee> */}
      <Marquee pauseOnHover>
        <div className="flex gap-10 overflow-x-auto">
          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          />

          <img
            className="size-20"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
          <img className="size-20 mr-10" src={jwt} />
        </div>
      </Marquee>
    </section>
  );
};

export default Technologies;
