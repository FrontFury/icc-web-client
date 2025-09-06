import img001 from "../../../assets/Campus Culture/1.png";
import img002 from "../../../assets/Campus Culture/2.png";
import img003 from "../../../assets/Campus Culture/3.png";
import img004 from "../../../assets/Campus Culture/4.png";
import img005 from "../../../assets/Campus Culture/5.png";
import img006 from "../../../assets/Campus Culture/6.png";
import img007 from "../../../assets/Campus Culture/7.png";
import img008 from "../../../assets/Campus Culture/8.png";
import img009 from "../../../assets/Campus Culture/9.png";

const CampusCulture = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h2 className="text-5xl font-bold">
          Discover the Spirit of Our Campus Life
        </h2>
        <p className="w-3/5 text-center text-lg text-gray-700 font-semibold">
          Our campus thrives on unity, celebration, and growth. From grand
          cultural events and academic programs to sports, reunions, and
          everyday friendships, each moment reflects the lively spirit of our
          community—where learning meets joy, and connections turn into lifelong
          memories.
        </p>
      </div>

      <div className="py-10 grid grid-cols-3 px-20 gap-2">
        {/* COL 01 */}
        <div className="space-y-2">
          <figure>
            <div className="relative group overflow-hidden shadow-lg cursor-pointer">
              {/* Image */}
              <img
                src={img005}
                alt=""
                className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                <button className="text-white text-2xl font-bold">
                  Annual Study Tour
                </button>
              </div>
            </div>
          </figure>
          <figure>
            <div className="relative group overflow-hidden shadow-lg cursor-pointer">
              {/* Image */}
              <img
                src={img003}
                alt=""
                className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                <button className="text-white text-2xl font-bold">
                  Session Ending Program
                </button>
              </div>
            </div>
          </figure>
        </div>

        {/* COL 02 */}
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <div>
              <figure>
                <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                  {/* Image */}
                  <img
                    src={img007}
                    alt=""
                    className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                    <button className="text-white text-xl font-bold">
                      Orientation Program
                    </button>
                  </div>
                </div>
              </figure>
            </div>
            <div>
              <figure>
                <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                  {/* Image */}
                  <img
                    src={img002}
                    alt=""
                    className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                    <button className="text-white text-xl font-bold">
                      Result Publication
                    </button>
                  </div>
                </div>
              </figure>
            </div>
          </div>

          <div className="">
            <figure>
              <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                {/* Image */}
                <img
                  src={img008}
                  alt=""
                  className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                  <button className="text-white text-2xl font-bold">
                    Band Durnibar Perform at ICC
                  </button>
                </div>
              </div>
            </figure>
          </div>

          <div className="flex flex-row space-x-2">
            <div>
              <figure>
                <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                  {/* Image */}
                  <img
                    src={img004}
                    alt=""
                    className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                    <button className="text-white text-xl font-bold">
                      Morning Parade
                    </button>
                  </div>
                </div>
              </figure>
            </div>
            <div>
              <figure>
                <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                  {/* Image */}
                  <img
                    src={img009}
                    alt=""
                    className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                    <button className="text-white text-xl font-bold">
                      Friendly Football Match
                    </button>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>

        {/* COL 03 */}
        <div className="flex flex-col space-y-2">
          <figure>
            <div className="relative group overflow-hidden shadow-lg cursor-pointer">
              {/* Image */}
              <img
                src={img001}
                alt=""
                className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                <button className="text-white text-2xl font-bold">
                  ICC Re-union 2022
                </button>
              </div>
            </div>
          </figure>
          <figure>
            <div className="relative group overflow-hidden shadow-lg cursor-pointer">
              {/* Image */}
              <img
                src={img006}
                alt=""
                className="w-full rounded-xl h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                <button className="text-white text-2xl font-bold">
                  Felicitation of Meritorious Students
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default CampusCulture;
