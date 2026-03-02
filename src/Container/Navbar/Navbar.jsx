const Navbar = () => {
  return (
    <nav className="bg-amber-50 p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-amber-900 text-xl font-bold">My Chocolate <span className="text-amber-800 font-momo">Shop</span></h1>
      </div>
      <div className="flex justify-between items-center mx-auto list-none">
        <div></div>
        <div className="flex justify-between items-center mx-auto list-none gap-12" >
        <li className="text-amber-800 text-2xl font-bold hover:text-amber-600 hover:border-b-2 hover:border-amber-600 transition">Home</li>
        <li className="text-amber-800 text-2xl font-bold hover:text-amber-600 hover:border-b-2 hover:border-amber-600 transition">Above</li>
        <li className="text-amber-800 text-2xl font-bold hover:text-amber-600 hover:border-b-2 hover:border-amber-600 transition">Features</li>
        <li className="text-amber-800 text-2xl font-bold hover:text-amber-600 hover:border-b-2 hover:border-amber-600 transition">Catedories</li>
        <li className="text-amber-800 text-2xl font-bold hover:text-amber-600 hover:border-b-2 hover:border-amber-600 transition">Contact</li>
        <input type="text" placeholder="Search..." className="bg-amber-100 text-amber-900 px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:border-amber-600" />
        </div>
        <div></div>
        
      </div>
    </nav>
  );
};

export default Navbar;