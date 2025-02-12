import Link from "next/link";

const NavBarPage = () => {
  return (
    <div>
      <nav className="w-full max-w-7xl mx-auto h-14 flex items-center justify-between">
       <Link href={"/"}>
        <h1 className="text-xl font-bold">Home</h1>
       </Link>
        <div className="flex gap-4">
          <Link href={"/performance"} >
          <h1>Performance</h1>
          </Link>
          <Link href={"/reliability"}>
           <h1>Reliability</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarPage;
