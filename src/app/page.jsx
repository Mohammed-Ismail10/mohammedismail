import Image from "next/image.js";
import right from '../images/right.png';
import Link from "next/link.js";
import { TiDownload } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <div >
        <div className="flex justify-center text-center">
          <div>
            <div className="flex justify-center">
              <Image className="w-1/5" src={right} alt="programmer" />
            </div>
            <span className='text-lg font-medium text-[#999999]'>I AM</span>
            <h1 className='text-3xl font-semibold'>Mohammed Ismail</h1>
            <h2 className='text-3xl font-semibold'>Frontend Developer (React & Next)</h2>
            <div className='flex items-center mt-5 gap-2 text-center justify-center'>
              <span className='bg-[#44993B] size-2 block rounded-full'></span>
              <Link href='/contact' className='text-lg text-[#cccccc]  border-b border-[#cccccc] hover:text-white hover:border-white'>I am available for a job. Hire me</Link>
            </div>
          </div>
        </div>


        <div className="mt-10">
          <h2 className="text-lg font-medium text-[#987750] uppercase">Summary</h2>
          <p className="text-3xl text-[#888888]">Junior Frontend developer with very good hands-on experience in JavaScript, React, Next.js, Redux, HTML, CSS specializing in building websites using the React library and Next framework. Seeking for a new job opportunity that will expand my skill set.</p>
        </div>


        <div className="mt-10 flex justify-center">
          <Link
            className="flex flex-col items-center gap-2 border-2 border-[#888888] px-20 py-10 hover:border-[#987750] duration-300" href={'/Mohammed Abdullah CV.pdf'}
            target="_blank"
            download={true}>
            <TiDownload size={58} />
            <p className="text-lg font-medium text-[#888888]">DOWNLOAD CV</p>
          </Link>
        </div>

      </div>
    </>
  );
}
