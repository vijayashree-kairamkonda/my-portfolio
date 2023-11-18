export const Contact = () => {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold italic text-center">CONTACT</div>
      <section className="flex flex-col  space-y-12">
        <div>
          <h4 className="text-xl font-semibold ">Address</h4>
          <span className="text-lg font-thin italic">
            KACHIGUDA, HYDERABAD, INDIA
          </span>
        </div>
        <div>
          <h4 className="text-xl font-semibold ">Email</h4>
          <span className="text-lg font-thin italic">
            vijayashree369@gmail.com
          </span>
        </div>

        <div>
          <h4 className="text-xl font-semibold ">Social</h4>
          <div className="flex  justify-start space-x-10 items-center">
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
      </section>
    </div>
  );
};
