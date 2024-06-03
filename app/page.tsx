import Image from "next/image";
import background from "./assets/bg2.jpeg";
import poster from "./assets/poster.jpg";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen absolute z-10 py-[8vh] px-[3vw]">
        <div className="p-4 my-10 flex">
          <div className="w-full h-fit bg-cover md:flex justify-between ">
            <div className="items-center mt-10">
              <h1 className="text-7xl font-poppins font-bold head">The Best</h1>
              <h1 className="text-7xl font-poppins font-bold head">
                Sloting Services
              </h1>
              <h1 className="text-7xl font-poppins font-bold text-[#097969] head">
                in Your City
              </h1>
              <p className="text-xl font-poppins font-medium mt-10 head">
                Slotin assures quality and Also to mange everyones time
                efficiently.
              </p>
              <button
                className="shadow-3xl text-lg mt-[5vh] font-medium font-poppins px-4 py-2 bg-[#097969] rounded-md hover:bg-red-400 hover:text-black transition-transform"
                id="btn"
              >
                book now
              </button>
            </div>
          </div>
          <Image
            src={poster}
            alt="poster"
            className="hidden  md:flex max-w-[45vw] rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
