import logo from "../../../../src/assets/Icc-logo.png";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#00212A] text-white">
      <footer className="flex flex-row justify-between bg-[#00212A]">
        <div className="w-10/12 flex flex-row justify-between py-10">
          <div className="w-1/3 ml-60">
            <img className="w-32" src={logo} alt="" />
            <p className="w-full text-xl text-white font-bold text-justify mt-5">
              Ideal Commerce College (ICC)
              <br />
              <span className="text-base footer-title font-medium">
                Ideal Commerce College, established in 2004 in Farmgate, Dhaka,
                is known for its strong HSC results, disciplined environment,
                and focus on Business Studies. It offers modern facilities and
                recently added a Science stream.
              </span>
            </p>
          </div>

          <div className="flex flex-row justify-end gap-20 w-full">
            <nav className="flex flex-col space-y-3">
              <h6 className="footer-title font-bold">Ideal Commerce College</h6>
              <a className="link link-hover font-semibold text-base-500">
                About
              </a>
              <a className="link link-hover font-semibold text-base-500">
                Notice Board
              </a>
              <a className="link link-hover font-semibold text-base-500">
                Admission
              </a>
              <a className="link link-hover font-semibold text-base-500">
                Gallery
              </a>
            </nav>

            <nav className="flex flex-col space-y-3">
              <h6 className="footer-title font-bold">Department</h6>
              <a className="link link-hover font-semibold text-base-500">
                Science
              </a>
              <a className="link link-hover font-semibold text-base-500">
                Business Studies
              </a>
              <a className="link link-hover font-semibold text-base-500">
                Humanities
              </a>
            </nav>

            <nav className="flex flex-col space-y-3">
              <h6 className="footer-title font-bold">Contact</h6>
              <a className="link link-hover inline-flex items-center gap-2 font-semibold text-base-500">
                <span>
                  <IoCall />
                </span>
                +8801912‑130388
              </a>
              <a className="link link-hover font-semibold text-base-500 inline-flex items-center gap-2">
                <span>
                  <IoMdMail />
                </span>
                info@icc.edu.bd
              </a>
              <a className="link link-hover font-semibold text-base-500 inline-flex items-center gap-2">
                <span>
                  <FaLocationDot />
                </span>
                81 Green Road, Tejgaon, Dhaka 1205, Bangladesh
              </a>
            </nav>
          </div>
        </div>
      </footer>


        <p className="w-11/12 mx-auto h-[2px]  bg-white"></p>

      <div className="footer sm:footer-horizontal footer-center bg-[#00212A] font-semibold text-base-500 p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Estiak Ahamed Tasin
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
