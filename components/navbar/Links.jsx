import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-row space-x-4 lg:space-x-8 uppercase tracking-wider items-center text-md xl:text-lg font-Raleway font-thin">
      <Link href={"/"} className="nav-link">
        Home
      </Link>
      <Link href={"/retailSolutions"} className="nav-link">
        Retail Solutions
      </Link>
      <Link href={"/brandSolutions"} className="nav-link">
        Brand Solutions
      </Link>
      <Link className="nav-link" href={"/helpCenter"}>
        Help Center
      </Link>
    </div>
  );
};

export default Links;
