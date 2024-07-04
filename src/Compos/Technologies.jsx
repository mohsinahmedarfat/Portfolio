const Technologies = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "React Router",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];
  return (
    <section>
      <h2 className="text-3xl font-bold">Technologies I&apos;ve used</h2>
      <div className="mt-8 space-x-4 text-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block mb-5 bg-[#C3BEF0] px-4 py-2 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
