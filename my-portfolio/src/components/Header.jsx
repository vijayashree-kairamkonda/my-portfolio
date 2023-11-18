const Header = () => {
  return (
    <div className="flex flex-wrap w-screen bg-purple-700 justify-between p-6 sticky cursor-pointer">
      <div className="hover:text-white font-semibold">VIJAYASHREE K</div>
      <div className="flex space-x-16 flex-wrap">
        <span className="hover:text-white">Home</span>
        <span className="hover:text-white">About</span>
        <span className="hover:text-white">Projects</span>
        <span className="hover:text-white">Contact</span>
      </div>
    </div>
  );
};

export default Header;
