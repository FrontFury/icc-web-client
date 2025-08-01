import IccPhoto from '../../../assets/Home-Banner/Banner3.gif'
import { FaArrowRight } from "react-icons/fa";

const UnlockFuture = () => {
    return (
        <div className="py-10">
            <div className='flex flex-row justify-center items-center space-x-6'>
                <div className='w-1/2'>
                    <img className=' rounded-2xl' src={IccPhoto} alt="" />
                </div>
                <div className='w-1/2 space-y-4'>
                    <h1 className='text-5xl font-bold text-[#00212A]'>Craft Your Career with Ideal Commerce College</h1>
                    <p className='text-lg font-medium text-gray-700'>Accessible Education, Hassle-Free Admissions, and Scholarships to Fuel Your Ambition—because your goals matter. At Ideal Commerce College, we offer flexible learning paths and dedicated student support to ensure your journey is smooth and empowering. Let’s make your dreams a reality—together.</p>
                    <div className='grid grid-cols-3 py-5'>
                        <div className='flex flex-col'>
                            <h2 className='text-4xl font-bold text-[#00212A]'>03</h2>
                            <h4 className='text-lg font-medium text-[#00212A]'>Departments</h4>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-4xl font-bold text-[#00212A]'>04</h2>
                            <h4 className='text-lg font-medium text-[#00212A]'>Clubs</h4>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-4xl font-bold text-[#00212A]'>600+</h2>
                            <h4 className='text-lg font-medium text-[#00212A]'>Running Students</h4>
                        </div>
                    </div>
                    <button className='inline-flex items-center font-bold gap-3 px-5 py-2 border-2 border-[#00212A] text-[#00212A] rounded-2xl hover:bg-[#00212A] hover:text-white'>Read More <span><FaArrowRight /></span></button>
                </div>
            </div>
        </div>
    );
};

export default UnlockFuture;