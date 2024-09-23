'use client'
import Image from 'next/image.js'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function ProjectCard({ projectDetails }) {
  const { projectImage, projectName, projectConsdiered, projectDesc, tools, sourceLink, browseLink } = projectDetails;
  return (
    <>
      <div className='bg-[#181715] rounded-xl overflow-hidden flex flex-col'>
        <div>
          <Image className='w-full' src={projectImage} alt={projectName} />
        </div>
        <div className='p-5 flex flex-col flex-grow'>
          <div className='mb-5'>
            <h3 className="text-lg mb-3">{projectName} | <span className='text-[#888888] text-sm uppercase'>{projectConsdiered}</span></h3>
            <p className='text-[#888888]'>{projectDesc}</p>
            <div className='mt-3 flex flex-wrap gap-2'>
              {tools.map((tool, index) => <span key={index} className='bg-[#987750] text-white text-sm px-2 py-1 rounded-[5px]'>{tool}</span>)}
            </div>
          </div>
          <div className='flex justify-between mt-auto'>
            <button onClick={() => open(sourceLink, '_blank')}
              className='bg-white text-black py-1 px-2 rounded-[5px] flex items-center gap-2'>
              <FaGithub />
              Source
            </button>
            <button onClick={() => open(browseLink, '_blank')}
              className='bg-white text-black py-1 px-2 rounded-[5px] flex items-center gap-2'>
              <TfiWorld />
              Browse
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
