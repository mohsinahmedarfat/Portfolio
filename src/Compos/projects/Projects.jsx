import eduelevate from "../../assets/EduElevate.png";
import volunify from "../../assets/Volunify.png";
import wanderlust from "../../assets/Wanderlust.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const eduFeat = (
    <>
      <li>A student can be a teacher and can launch their courses.</li>
      <li>Students can pay for their course.</li>
      <li>Teachers can launch their courses and later can manage them.</li>
    </>
  );
  const volFeat = (
    <>
      <li>User can add volunteer posts.</li>
      <li>User can manage their volunteer posts.</li>
      <li>User can update or delete their volunteer posts.</li>
    </>
  );
  const wanderFeat = (
    <>
      <li>User can add tourist spots.</li>
      <li>User can manage their tourist spots.</li>
      <li>User can update or delete their tourist spots.</li>
    </>
  );

  return (
    <section>
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="space-y-5">
        <ProjectCard
          image={eduelevate}
          name={"EduElevate"}
          description={
            "EduElevate is a platform that connects students with instructors directly. Students can browse and purchase courses from their preferred teachers, while instructors can create and launch their own courses."
          }
          features={eduFeat}
          githubClient={
            "https://github.com/mohsinahmedarfat/EduElevate-client-side?tab=readme-ov-file"
          }
          githubServer={
            "https://github.com/mohsinahmedarfat/EduElevate-server-side"
          }
          live={"https://eduelevate.web.app"}
        ></ProjectCard>

        <ProjectCard
          image={volunify}
          name={"Volunify"}
          description={
            "Voluntify is a platform that connects volunteers with organizations or individuals in need of volunteer assistance. It facilitates both volunteering opportunities and volunteer recruitment."
          }
          features={volFeat}
          githubClient={
            "https://github.com/mohsinahmedarfat/Volunify-client-side?tab=readme-ov-file"
          }
          githubServer={
            "https://github.com/mohsinahmedarfat/Volunify-server-side"
          }
          live={"https://volunify-2c546.web.app"}
        ></ProjectCard>

        <ProjectCard
          image={wanderlust}
          name={"Wanderlust"}
          description={
            "Wanderlust is a travel planning tool that helps users create and manage their dream travel itineraries."
          }
          features={wanderFeat}
          githubClient={
            "https://github.com/mohsinahmedarfat/Wanderlust-client-side?tab=readme-ov-file"
          }
          githubServer={
            "https://github.com/mohsinahmedarfat/Wanderlust-server-side"
          }
          live={"https://wanderlust-3daf6.web.app"}
        ></ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
