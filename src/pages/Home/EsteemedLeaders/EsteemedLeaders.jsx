import chairman from "../../../assets/Esteemed Leaders/Chairman.png";
import director from "../../../assets/Esteemed Leaders/Director.png";
import principal from "../../../assets/Esteemed Leaders/Principle.png";

const EsteemedLeaders = () => {
  return (
    <div className="rounded-xl p-7 my-5 w-11/12 mx-auto">
      <h1 className="text-5xl text-[#00212a] font-bold  text-center py-5">
        Meet the Visionaries Behind Our Success
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10 font-semibold">
        A team of passionate leaders and educators dedicated to guiding students
        toward excellence and shaping a brighter future.
      </p>
      <div className="grid grid-cols-3 w-3/4 mx-auto gap-4">
        <div className="card bg-[#00212a] text-white shadow-sm">
          <figure>
            <img src={chairman} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr. M. A. Halim Patwary</h2>
            <p className="font-semibold  mb-7">
              Founder & Chairman, <br />
              Ideal Commerce College
            </p>
            <div className="card-actions justify-center">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="px-5 py-2 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-[#00212A] font-bold"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Read Mesage
              </button>
              <dialog id="my_modal_4" className="modal text-gray-800">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-[#00212A]">
                    Message From Chairman Sir !!
                  </h3>
                  <p className="py-4 font-semibold">
                    In today’s competitive global economy, success demands
                    skilled, forward-thinking individuals grounded in values,
                    patriotism, and knowledge. At{" "}
                    <span className="font-bold">Ideal Commerce College</span>,
                    we are committed to nurturing such capable minds—equipped
                    with both moral integrity and academic excellence.
                    Recognizing the growing need for science-based education
                    alongside business studies, we have introduced a science
                    stream to offer students a broader, multidimensional
                    learning experience. This expansion will empower students to
                    contribute meaningfully to the vision of a Digital
                    Bangladesh.
                  </p>
                  <br />
                  <p className="font-semibold">
                    Education today must be practical and market-driven. That’s
                    why our guiding motto is “A Touch of Modernity in Quality
                    Education.” At
                    <span className="font-bold">Ideal Commerce College</span>,
                    we don’t just promise quality—we ensure it, through a
                    modern, well-structured campus and a focus on values-based
                    leadership.With sincerity in purpose and a clear vision, we
                    move forward—committed to shaping the next generation of
                    leaders. With your continued support, we believe success is
                    not a dream, but a destination we will reach—In shaa Allah.
                  </p>
                  <p className="my-4 h-[2px]  bg-[#00212A]"></p>
                  <p className="font-semibold">
                    <span className="text-2xl font-bold">
                      Dr. M. A. Halim Patwary
                    </span>{" "}
                    <br />
                    Founder & Chairman, Ideal Commerce College <br />
                    Founder & Chairman, UCC Group <br />
                    Founder, Ideal International School <br />
                    Senate Member, University of Dhaka
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="px-5 py-2 border-2 border-[#00212A] text-[#00212A] rounded-2xl hover:bg-[#00212A] hover:text-white font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <div className="card bg-[#00212A] text-white shadow-sm">
          <figure>
            <img src={director} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hasina Momotaz</h2>
            <p className="font-semibold mb-7">
              Director, <br />
              Ideal Commerce College
            </p>
            <div className="card-actions justify-center">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="px-5 py-2 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-[#00212A] font-bold"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Read Message
              </button>
              <dialog id="my_modal_3" className="modal text-gray-700">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">
                    Message From Director Ma'am !!
                  </h3>
                  <p className="py-4 text-justify">
                    <span className="font-bold">Ideal Commerce College</span>,
                    located in the heart of Dhaka (Farmgate), was established by
                    the{" "}
                    <span className="font-bold">
                      Abdul Halim Patwary Foundation
                    </span>
                    . It is a renowned, smoke-free, and politics-free
                    institution run entirely with private funding. The college
                    started in <span className="font-bold">2004</span> with the
                    Business Studies stream and expanded in{" "}
                    <span className="font-bold">
                      2019 by adding the Science stream
                    </span>
                    . It is now progressing successfully with both
                    departments.The college is known for its strong discipline,
                    spacious campus, and dedicated teachers who ensure students
                    complete their studies within class hours—minimizing the
                    need for private tuition. A standout feature is the Guide
                    Teacher System, where each group of 7–8 students is mentored
                    closely by a teacher for both academic and personal support,
                    with regular communication maintained with guardians. Many
                    students with lower SSC results have significantly improved
                    their performance in HSC and gained admission to public
                    universities.
                  </p>
                  <p className="font-bold">
                    “Your child is yours—but their responsibility is ours.”
                  </p>
                  <br />

                  <p className="h-[2px]  bg-[#00212A] my-3"></p>
                  <p className="text-2xl font-bold">Hasina Momotaz</p>
                  <p className="font-semibold">
                    Director, <br />
                    Ideal Commerce College
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="px-5 py-2 border-2 border-[#00212A] text-[#00212A] rounded-2xl hover:bg-[#00212A] hover:text-white font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <div className="card bg-[#00212A] text-white shadow-sm">
          <figure>
            <img src={principal} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Professor Md. Amjad Hossain</h2>
            <p className="font-semibold mb-7">
              Principal, <br />
              Ideal Commerce College
            </p>
            <div className="card-actions justify-center">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="px-5 py-2 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-[#00212A] font-bold"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Read Message
              </button>
              <dialog id="my_modal_2" className="modal text-gray-700">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">
                    Message From Principal Sir !!
                  </h3>
                  <p className="py-4 text-justify">
                    <span className="font-bold">Ideal Commerce College</span>, located in Farmgate, Dhaka, is a
                    renowned educational institution established and operated by
                    the <span className="font-bold">Abdul Halim Patwary Foundation</span>. Since its inception in
                    2004 with the Business Studies stream and later expanding to
                    Science in 2019, the college has been committed to providing
                    quality education under the motto <span className="font-bold"><i>“Modernity in Quality
                    Education.”</i></span> Our experienced and trained faculty members
                    ensure a supportive learning environment that nurtures each
                    student’s potential. We emphasize not only academic
                    excellence but also personal development, discipline, and
                    moral values to shape students into complete individuals. We
                    believe that every student has unique talent, and with
                    proper care and guidance, they can achieve outstanding
                    results. Ideal Commerce College is fully dedicated to this
                    mission — helping students grow academically, socially, and
                    morally for a brighter future.
                  </p>

                  <br />

                  <p className="h-[2px]  bg-[#00212A] my-3"></p>
                  <p className="text-2xl font-bold">
                    Professor Md. Amjad Hossain
                  </p>
                  <p className="font-semibold">
                    Principal, <br />
                    Ideal Commerce College
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="px-5 py-2 border-2 border-[#00212A] text-[#00212A] rounded-2xl hover:bg-[#00212A] hover:text-white font-bold">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsteemedLeaders;
