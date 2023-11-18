export const Projects = () => {
  const projects = [
    {
      name: "Be Gorgeous",
      title: "An ecommerce Application.",
      description:
        "An e-commerce app with login, signup, product listing, sorting filters, wish list, cart management features.",
      link: "https://begorgeous.netlify.app/",
    },
    {
      name: "Vivid",
      title: "A social media application",
      description:
        "A Social media app with login, signup, news feed, create post,bookmark, comment, edit comment/post, sort posts,update profile features.",
      link: "https://vividsocial.netlify.com/",
    },
    {
      name: "Sockets",
      title: "Sample chat application using sockets.io",
      link: "",
    },
    {
      name: "Minion Translator",
      title:
        "A translator app which translates the English language into minion language.",
      link: "https://minion-translatorrrr.netlify.app/",
    },
  ];
  return (
    <>
      <div className="text-3xl font-bold italic text-center">MY PROJECTS</div>
      <div className="flex flex-col justify-center items-center p-4 ">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 rounded-xl w-10/12 m-2 p-3 flex flex-col space-y-2 items-start ring-purple-500 ring-offset-2 ring-2"
            >
              <h4 className="text-xl italic font-semibold py-6">
                {project.name}- {project.title}
              </h4>
              <span>{project.description}</span>
              <button className="bg-purple-800 text-white rounded-xl p-2">
                <a href={project.link} target="_blank" rel="noreferrer">
                  GO LIVE
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
