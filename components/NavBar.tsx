import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activItem: string;
  setActivItem: Function;
  route: string;
  name: string;
}> = ({ activItem, setActivItem, route, name }) => {
  return activItem !== name ? (
    <Link href={route}>
      <a onClick={() => setActivItem(name)} className="hover:text-green">
        <span> {name}</span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activItem, setActivItem] = useState("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname == "/") setActivItem("About");
    if (pathname == "/projects") setActivItem("Projects");
    if (pathname == "/resume") setActivItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-lg font-bold border-b-4 border-green text-green md:text-2xl">
        {activItem}
      </span>
      <div className="flex space-x-5 text-lg font-bold">
        <NavItem
          activItem={activItem}
          setActivItem={setActivItem}
          name="About"
          route="/"
        />
        <NavItem
          activItem={activItem}
          setActivItem={setActivItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activItem={activItem}
          setActivItem={setActivItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
