//font setup
import { Sora } from "next/font/google";
import { Children } from "react";

//font seting
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//component
import Nav from '../components/Nav';
import Header from "../components/Header";

const Layout = ({children}) => {
  return(
    <div className={`page bg-site text-black bg-cover bg-no-repeat  ${sora.variable} font-sora relative`}>
        <Nav />
        <Header />
        {children}
    </div>
  )
};

export default Layout;
