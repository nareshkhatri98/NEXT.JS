const NavBarPage = () => {
  return (
    <div>
      <nav className="w-full max-w-7xl mx-auto h-14 flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="flex gap-4">
          <h1>Performance</h1>
          <h1>Reliability</h1>
        </div>
      </nav>
    </div>
  );
};

export default NavBarPage;
