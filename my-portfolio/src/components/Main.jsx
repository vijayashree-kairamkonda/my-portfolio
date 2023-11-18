export const Main = () => {
  return (
    <div className="flex flex-col justify-around h-5/6 p-8 items-center ">
      <div>
        <img
          className="h-56 w-56 rounded-full bg-white"
          src="https://avatars.githubusercontent.com/u/75258563?s=400&u=eaff69173475d9448913a565b6c62a016cf3777d&v=4"
        />
      </div>
      <div>
        <div className="text-4xl font-bold text-center">Hi, I am Vijayashree</div>
        <div className="text-2xl font-semibold text-center">
          I am a Front End Engineer. Currently working at DHAN AI as a Front End
          Engineer.
        </div>
      </div>
      <div className="flex w-full justify-center space-x-10 items-center">
        <a
          href="mailto:vijayashree369@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-10 h-10 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
          />
        </a>
        <a
          href="https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4126086,78.2432325,11z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.385044!4d78.486671!16zL20vMDljNnc?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-10 h-9 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/447/447031.png"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vijayashree-kairamkonda-7227581bb/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-10 h-10 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
          />
        </a>
        <a
          href="https://github.com/vijayashree-kairamkonda"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-14 h-14 cursor-pointer"
            src="https://pngimg.com/uploads/github/github_PNG32.png"
          />
        </a>
      </div>
    </div>
  );
};
