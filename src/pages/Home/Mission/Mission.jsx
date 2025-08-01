import { FaArrowAltCircleLeft } from "react-icons/fa";


const Mission = () => {
  return (
    <div className="space-y-4 mb-10">
      <h5 className="text-5xl font-bold text-[#00212A] text-center pt-9">Our Commitment to Excellence</h5>
      <p className="w-3/5 mx-auto text-center text-lg font-medium text-[#00212A]-700 pb-8">At Ideal Commerce College, we are dedicated to maintaining the highest standards in education, leadership, and student success. Our commitment to excellence drives us to continually innovate, inspire, and deliver quality learning experiences that shape bright futures.</p>
      <div className="flex flex-row gap-4">
        <div className="w-1/2 p-6 border-2 border-[#00212A] rounded-2xl flex flex-row justify-center items-center">
          <h1 className="text-7xl font-bold text-[#00212A]">Vision</h1>
        </div>
        <div className="w-1/2 p-6 bg-[#00212af3] text-white  rounded-2xl">
          <p className="text-lg text-justify">
            To provide quality education with a modern touch, nurturing students
            into enlightened, humane, and globally competent individuals. ICC
            aims to shape students who excel academically and thrive as
            responsible citizens.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-1/2 p-6 bg-[#00212af3] text-white  rounded-2xl">
          <p className="text-lg text-justify">
            ICC strives to create an educational environment that enables
            students to become honest and successful individuals, well-prepared
            for the demands of the world. Their mission centers around
            delivering modern, knowledge-based education in a politics- and
            smoke-free, disciplined campus atmosphere.
          </p>
        </div>
        <div className="w-1/2 p-6 border-2 border-[#00212A] rounded-2xl flex flex-row justify-center items-center">
          <h1 className="text-7xl font-bold text-[#00212A]">Mission</h1>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-1/2 p-6 border-2 border-[#00212A] rounded-2xl flex flex-row justify-center items-center">
          <h1 className="text-7xl font-bold text-[#00212A]">Goals</h1>
        </div>
        <div className="w-1/2 p-6 bg-[#00212af3] text-white  rounded-2xl">
          <p className="text-lg text-justify">
            Ideal Commerce College focuses on academic excellence, especially in
            Business Studies, with consistently strong board results. It
            promotes holistic development through co-curricular activities and
            introduced a Science stream in 2019. The college ensures a
            disciplined, clean, and politics-free campus for a safe learning
            environment.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
