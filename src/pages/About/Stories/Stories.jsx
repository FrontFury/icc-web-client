import { FaUserGraduate } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const Stories = () => {
    return (
        <div className="bg-white py-7 mb-16">
            <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold text-[#00212A]">Stories of Excellence</h1>
                <p className="text-base font-medium text-[#00212A] mt-4"><i>Celebrating the achievements that inspire generations</i></p>
                <div className="grid grid-cols-4 gap-7 mt-10">
                    <div className="flex flex-col justify-center items-center p-6 py-7 space-y-4 bg-[#d0e3ff61] rounded-2xl">
                        <p className="text-7xl"><FaUserGraduate /></p>
                        <h3 className="text-2xl font-bold">Leaders Beyond Campus</h3>
                        <p className="text-justify text-base font-semibold text-gray-600">Our alumni have gone on to excel in diverse fields, from business and technology to arts, education, and community service. They embody leadership and purpose, contributing meaningfully to their industries and societies while carrying the legacy of Ideal Commerce College forward.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-6 py-7 space-y-4 bg-[#d0e3ff61] rounded-2xl">
                        <p className="text-7xl"><GrAchievement /></p>
                        <h3 className="text-2xl font-bold">Milestones in Learning</h3>
                        <p className="text-justify text-base font-semibold text-gray-600">ICC students consistently set new standards in academic excellence. Through dedication, hard work, and the guidance of skilled faculty, they have achieved top honors and prestigious awards in both national and international competitions, strengthening the reputation of the institution year after year.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-6 py-7 space-y-4 bg-[#d0e3ff61] rounded-2xl">
                        <p className="text-7xl"><FaUsers /></p>
                        <h3 className="text-2xl font-bold">Building a Better Tomorrow</h3>
                        <p className="text-justify text-base font-semibold text-gray-600">Education at ICC goes beyond textbooks and classrooms. Through outreach programs, volunteer initiatives, and community projects, our students and faculty actively contribute to society, fostering growth, inclusivity, and positive change that benefits future generations.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-6 py-7 space-y-4 bg-[#d0e3ff61] rounded-2xl">
                        <p className="text-7xl"><GiProgression /></p>
                        <h3 className="text-2xl font-bold">Innovation and Progress</h3>
                        <p className="text-justify text-base font-semibold text-gray-600">At ICC, innovation is at the heart of learning. With modern classrooms, digital resources, and technology-driven teaching methods, we prepare students to adapt to an ever-changing world. This forward-looking approach equips them not only with knowledge but also with the skills and creativity needed to lead in the future.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Stories;