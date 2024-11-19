// React icons
import { HiAcademicCap, HiHomeModern, HiMegaphone, HiBriefcase, HiCube, HiRocketLaunch } from "react-icons/hi2";

//Navigation Data
export const navigationData = [
  {name: 'home', path: '/', icon: <HiHomeModern/>},
  {name: 'about', path: '/about', icon: <HiAcademicCap/>},
  {name: 'services', path: '/services', icon: <HiCube/>},
  {name: 'work', path: '/work', icon: <HiBriefcase/>},
  {name: 'testimonials', path: '/testimonials', icon: <HiMegaphone/>},
  {name: 'contact', path: '/contact', icon: <HiRocketLaunch/>},
]

//Next Link
import Link from "next/link";

//Next router
import { useRouter } from "next/router";


const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto
    xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* menu inner section */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center
      gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-slate-200 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl
      xl:rounded-full">
        {
          navigationData.map((link, index) => {
            return (
              <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent"} relative flex items-center group hover:text-accent transition-all duration-300`}>
                {/*Tooltip */}
                <div className="hidden absolute pl-12 left-0 xl:group-hover:flex">
                  <div className="bg-accent relative flex text-white items-center px-4
                  py-2 rounded-full">
                    <div className="text-[12px] leading-none font-semibold capitalize">
                      {link.name}
                    </div>
                  </div>
                </div>

                {/*Nav Icons */}
                {link.icon}
              </Link>
            );
          })
        }
      </div>
    </nav>
  );
}

export default Nav;