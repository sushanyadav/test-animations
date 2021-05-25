import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <div className="text-white absolute top-0 w-full">
      <div>
        <nav className="container flex items-center px-4 uppercase h-16">
          <Link href="/">
            <a className={pathname === "/" ? "font-semibold" : ""}>Home</a>
          </Link>
          <Link href="/gsap">
            <a
              className={`${pathname === "/gsap" ? "font-semibold" : ""} ml-8`}
            >
              Gsap
            </a>
          </Link>
          <Link href="/framer-motion">
            <a
              className={`${
                pathname === "/framer-motion" ? "font-semibold" : ""
              } ml-8`}
            >
              Framer Motion
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
