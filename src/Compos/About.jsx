import img from "../assets/Mohsin Ahmed Arfat.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">About me</h1>
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-20">
        <div>
          <p className="font-medium text-justify">
            Hi, I am Mohsin Ahmed Arfat, a passionate{" "}
            <strong>Web Developer</strong> specializing in creating dynamic and
            user-friendly web applications. With a solid background in HTML5,
            CSS3, Tailwind CSS, JavaScript, React, Node.js, Express.js, and
            MongoDB, I have a strong foundation in both{" "}
            <strong>frontend</strong> and <strong>backend</strong> development.{" "}
            <br /> I started my journey in web development one year ago, driven
            by my curiosity and passion for technology. Over the year, I have
            honed my skills by working on various projects, from small personal
            websites to complex web applications. My goal is to build efficient,
            scalable, and visually appealing web solutions that provide a
            seamless user experience. <br />I take pride in my ability to solve
            problems creatively and my commitment to continuous learning. I am
            always eager to explore new technologies and stay updated with
            industry trends. <br /> Some of my notable projects include a
            responsive tourism, volunteer, educational platform built with
            React, Firebase, Node.js. These projects have helped me develop a
            keen eye for detail and a deep understanding of modern web
            development practices. <br /> When I am not coding, you can find me
            exploring the latest tech trends, reading tech blogs, or working on
            personal projects. I also enjoy playing football and cooking in my
            free time.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            className="w-3/4 h-72 md:w-1/2 md:h-[350px] lg:w-full lg:h-[45%] xl:w-full xl:h-[55%] object-cover rounded-lg"
            src={img}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
