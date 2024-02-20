import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HomeImg from "./components/images/HomeImg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
         <header>
        <Navbar /> 
      </header>
      <main>
      <div className="h-screen flex items-center justify-center">
        <div className="md:container md:mx-auto md:flex">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold m-5">Make Jobs Accessible For Everyone.</h1>
            <p className="m-5">
              Intern Hub is a platform that connects students with internships. We
              provide a platform for students to find internships and for companies
              to find interns.
            </p>
            <Link className="btn btn-wide m-5 sm:btn-sm md:btn-md bg-teal-600 hover:bg-teal-700 text-gray-50" href="/login">Lets Get Started</Link>
          </div>
          <div className="md:w-2/3">
            <HomeImg></HomeImg>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
