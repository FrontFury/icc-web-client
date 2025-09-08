import image01 from "../../../assets/About/2.png";
import image02 from "../../../assets/About/3.png";
import image03 from "../../../assets/About/4.png";

const Description = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center py-10 space-y-4">
      <h1 className="text-4xl font-bold text-[#00212A]">
        A Legacy of Excellence in Education
      </h1>
      <p className="text-base font-medium text-[#00212A]">
        <i>
          Tracing the foundation, growth, and legacy of Ideal Commerce College
        </i>
      </p>
      <div className="flex flex-col justify-center items-center space-y-7 pt-14">
        <div className="flex flex-row justify-center items-start space-x-6 w-5/6">
          <div className="flex flex-col w-1/2 justify-center items-start space-y-3">
            <h2 className="text-3xl font-bold text-[#00212A]">
              Foundations of Excellence :
            </h2>
            <p className="text-justify text-lg text-gray-500 font-semibold">
              Founded with the vision of promoting quality education in
              Bangladesh, Ideal Commerce College (ICC) has established itself as
              one of Dhaka’s most prominent institutions for higher secondary
              education. Since its inception in 2004, the college has been
              dedicated to nurturing talent, instilling discipline, and
              preparing students for the challenges of modern academic and
              professional life. With a commitment to creating a politics-free
              and smoke-free environment, ICC has become a trusted name among
              students and guardians alike. Over the years, the college has
              consistently produced excellent results, particularly in the
              Commerce stream, shaping thousands of young learners into
              successful scholars and professionals.
            </p>
          </div>
          <div className="w-1/2">
            <img className="rounded-2xl" src={image01} alt="" />
          </div>
        </div>

        <div className="flex flex-row justify-center items-start space-x-6 w-5/6">
          <div className="w-1/2">
            <img className="rounded-2xl" src={image02} alt="" />
          </div>
          <div className="flex flex-col w-1/2 justify-center items-start space-y-3">
            <h2 className="text-3xl font-bold text-[#00212A]">
              Roots of Success :
            </h2>
            <p className="text-justify text-gray-500 text-lg font-semibold">
              Ideal Commerce College began its journey in 2004 at 81 Green Road,
              Farmgate, Dhaka, under the leadership of its visionary founder,
              Ln. Dr. M. A. Halim Patwary. Initially focused on commerce
              education, the institution soon expanded its offerings to include
              Humanities and Science streams, ensuring a balanced academic
              environment for diverse learners. From the beginning, the college
              emphasized discipline, punctuality, and quality teaching. With
              dedicated faculty members and modern classrooms, ICC quickly rose
              in reputation, attracting ambitious students from across the city.
              The leadership of Director Hasina Momtaz and Principal Prof. Md.
              Amjad Hossain further strengthened its academic foundation,
              enabling the college to maintain consistent growth and
              recognition.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-start space-x-6 w-5/6">
          <div className="flex flex-col w-1/2 justify-center items-start space-y-3">
            <h2 className="text-3xl font-bold text-[#00212A]">Future Path :</h2>
            <p className="text-justify text-lg text-gray-500 font-semibold">
              Today, Ideal Commerce College stands as a symbol of academic
              excellence and integrity in Bangladesh’s education sector. The
              institution is equipped with well-furnished classrooms, a
              comprehensive library, computer labs with internet access, and an
              auditorium for cultural and intellectual activities. Beyond
              academics, ICC encourages students to engage in extracurricular
              pursuits, including debates, sports, and public speaking,
              fostering all-round development.<br></br> Over the decades, ICC has
              produced thousands of graduates who have gone on to excel in
              higher studies and professional fields. Its commitment to quality
              education and student-centered development has made it a leading
              choice for higher secondary education in Dhaka. Looking ahead,
              Ideal Commerce College continues to expand its vision by adopting
              modern teaching methods, embracing technology, and strengthening
              its role as a premier institution that shapes the future leaders
              of Bangladesh.
            </p>
          </div>
          <div className="w-1/2">
            <img className="rounded-2xl" src={image03} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
