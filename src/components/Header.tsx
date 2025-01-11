
const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="flex justify-between items-center h-16 px-6">
        <a href="/" className="text-xl font-bold">Book My Pooja</a>
        <nav className="hidden md:flex space-x-4">
          <a href="#categories" className="text-gray-700 hover:text-accent">Categories</a>
          <a href="#deities" className="text-gray-700 hover:text-accent">Deities</a>
          <a href="#contact" className="text-gray-700 hover:text-accent">Contact</a>
        </nav>
        <button className="md:hidden text-gray-700">Menu</button>
      </div>
    </header>
  );
};

export default Header; 