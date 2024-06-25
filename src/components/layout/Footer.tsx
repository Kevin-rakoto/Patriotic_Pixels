import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../../assets/logo_fireneko.png"

const Footer = () => {
  return (
    <div className="bg-[#171717] text-white">
      <div className="md:flex md: md:items-center sm:px-12 px-4 bg-gray-600 py-7">
        <h1 className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> for updates on
          NyFireneko events.
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div>
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <div className="flex items-center justify-center h-24 bg-none text-green-600">
            <img src={logo} alt="Logo NyFireneko" className="w-10 object-contain" />
            <h1 className="text-3xl font-bold">NyFireneko</h1>
          </div>
          <br />
          <p>
            Explore Madagascar's independence history with NyFireneko's guided
            tours.
          </p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 NyFireneko. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
