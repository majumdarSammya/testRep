import { Link } from "react-router-dom";
// import documentation from "../documentation/Document_Extractor_Revised_2.pdf";

export default function navBar() {
  return (
    <div className="shadow-md pb-2 mb-0 pt-4 border-b border-gray-200 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 ">
      <nav className="">
        <div className="mx-[1%] px-0">
          <div className="flex items-center justify-between py-1">
            <Link to="/">
              <span className="text-sm font-bold text-gray-700 font-karla">
                DATA STUDIO UKI
              </span>
            </Link>
            <div className="flex space-x-4 text-gray-900">
              <Link
                to="/"
                className="nav text-gray-900 hover:text-black hover:font-semibold text-sm"
              >
                Home
              </Link>
              <Link
                to="/data"
                className="nav text-gray-900 hover:text-black hover:font-semibold text-sm"
              >
                Data
              </Link>
              <Link
                to="/dashboard"
                className="nav text-gray-900 hover:text-black hover:font-semibold text-sm"
              >
                Dashboard
              </Link>
              {/* <a href={documentation}>
                <div className=" text-sm font-karla nav hover:text-black hover:font-semibold text-gray-900  cursor-pointer">
                  Documentation
                </div>
              </a> */}
              <Link
                to="/documentation"
                className="nav text-gray-900 hover:text-black hover:font-semibold text-sm"
              >
                {" "}
                Documentation{" "}
              </Link>
              <Link
                to="/team"
                className="nav text-gray-900 hover:text-black hover:font-semibold text-sm"
              >
                Team
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
