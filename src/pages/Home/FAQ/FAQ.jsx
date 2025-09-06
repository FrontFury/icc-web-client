import LottieFAQ from "../../../assets/FAQ.json";
import Lottie from "lottie-react";
import Prospectus from "./Prospectus.pdf";

const FAQ = () => {
  return (
    <div className="py-7 bg-white w-full px-20 mx-auto">
      <h1 className="text-5xl font-bold text-center text-[#00212A]">Frequently Asked Questions</h1>
      <div className="flex flex-row justify-center items-center">
        <div className="w-1/3">
          <div className="w-[500px]">
            <Lottie animationData={LottieFAQ}></Lottie>
          </div>
        </div>
        <div className="w-full space-y-4">
            
          <div className="collapse collapse-arrow border border-base-300 text-white bg-[#00212A]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What is the admission process at Ideal Commerce College?
            </div>
            <div className="collapse-content text-sm">
              <p>The admission process includes submitting an online application through the national portal, providing academic transcripts (SSC results), and completing enrollment based on merit. No entrance exam or interview is required, but selection depends on GPA and seat availability. Alternatively, you may visit the college campus directly, where an admission booth is available to assist with the application process.</p> <br />
              <a href={Prospectus} download="Prospectus_ICC.pdf"><b><u>Download PDF</u></b></a>
            </div>
          </div>


          <div className="collapse collapse-arrow text-white bg-[#00212A] border border-base-300 ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              What are the available programs at Ideal Commerce College?
            </div>
            <div className="collapse-content text-sm ">
              We offer Higher Secondary programs in Science, Arts, and Commerce streams, designed to build strong academic foundations for university admission. Our curriculum emphasizes quality education, discipline, and modern teaching methods across all subjects.
            </div>
          </div>


          <div className="collapse collapse-arrow text-white bg-[#00212A] border border-base-300 ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              What are the campus facilities?
            </div>
            <div className="collapse-content text-sm ">
              Our campus features modern, spacious classrooms equipped with multimedia technology, a well-furnished computer laboratory, and a comprehensive library that supports both academic and research needs. Students also benefit from sports facilities, a large auditorium for cultural and academic events, and dedicated spaces for debates, language practice, and other extracurricular activities. To ensure a comfortable learning environment, the campus maintains a clean, disciplined, and politics-free atmosphere, with reliable utilities such as pure drinking water and uninterrupted power supply.
            </div>
          </div>

          <div className="collapse collapse-arrow  border border-base-300 text-white bg-[#00212A]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Does the college offer extracurricular activities and student organizations?
            </div>
            <div className="collapse-content text-sm">
              Yes, Idea Commerce College offers a wide range of extracurricular activities and student organizations to support the overall development of its students. These include the Rover Scouts, Debate Club, Sports Club, Language Club, as well as various cultural and literary clubs. The college also organizes annual events such as Independence Day celebrations, Victory Day programs, and cultural festivals, which encourage student participation and leadership.

            </div>
          </div>

          <div className="collapse collapse-arrow  border border-base-300 text-white bg-[#00212A]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How can I contact the admission office?
            </div>
            <div className="collapse-content text-sm">
              You can reach our admission office through email at principalicc@yahoo.com, phone at 0258155962 , 01912130388 , 01559086941-2 or visit us during office hours (9 AM - 4 PM, Sunday-Thursday).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
