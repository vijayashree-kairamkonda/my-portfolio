export const About = () => {
  const skills = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML5",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      title: "CSS3",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "Javascript-ES6",
    },
    {
      img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      title: "Reactjs",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2AZnq68MnZ5dmEYvDdocYdLo_VLk3_793w&usqp=CAU",
      title: "Redux toolkit",
    },
    {
      img: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      title: "Typescript",
    },
    {
      img: "data:image/png;base64,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",
      title: "RTL-React Testing Library",
    },
    {
      img: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      title: "JEST",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBonND50EMiP9GVoJjZyMF_7RSjgBB_NZwFA&usqp=CAU",
      title: "Material UI",
    },
    {
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      title: "Tailwind CSS",
    },
    {
      img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      title: "Figma Design",
    },
    {
      img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      title: "Postman",
    },
    {
      img: "https://pngimg.com/uploads/github/github_PNG32.png",
      title: "Github",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwHo7sxZ6PE7kXh9VRgf9mpX3lu7tQEEQlw&usqp=CAU",
      title: "Netlify",
    },
    {
      img: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      title: "Graph QL",
    },
    {
      img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      title: "Firebase",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center space-y-6 p-10">
      <div className="text-3xl font-bold italic">ABOUT ME</div>
      <div className="text-md text-gray-700 font-semibold text-center">
        A self-taught Front-End Developer with entry-level experience
        specializing in web development, user interface design. Adapt at
        identifying opportunities to enhance front-end design and improve the
        user experience. Proficient in code optimization to improving the
        performance.I passionately combine good design, technology, and
        innovation in all my projects, which I like to accompany from the first
        idea to release.
      </div>

      <div className="text-md font-bold italic">MY SKILLS</div>
      <div className="flex items-center justify-center flex-wrap">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex w-21  p-2 space-x-2 items-center justify-center rounded-xl m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 "
            >
              <img className="w-5 h-5" alt="" src={skill.img} />
              <div>{skill.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
