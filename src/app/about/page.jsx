'use client'
import Link from 'next/link.js'
import React, { useState } from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


export default function About() {

  const [activeTab, setActiveTab] = useState("experience");
  const data = [
    {
      label: "Experience",
      value: "experience",
      desc: (<div className='flex flex-col gap-4'>
        <div className='relative p-10 bg-[#181715] before:content-[""] before:absolute before:h-12 before:w-1 before:bg-[#fff3] before:left-0 before:top-1/2 before:-translate-y-1/2'>
          <div className='flex flex-wrap gap-5'>
            <h5 className='text-lg uppercase text-white'>Freelance | oppa, flooq</h5>
            <span className='text-[#888888]'>(11/2023 - present)</span>
          </div>
          <h3 className='text-white text-3xl mt-3.5'>Frontend Developer</h3>
          <div className='mt-5'>
            <p className='text-[#888888] text-lg'>
              - Build UI for the web.
              <br />
              - Implement Restful Apis for the application.
            </p>
          </div>
        </div>
      </div>),
    },
    {
      label: "Education",
      value: "education",
      desc: (<div>
        <div className='relative p-10 bg-[#181715] before:content-[""] before:absolute before:h-12 before:w-1 before:bg-[#fff3] before:left-0 before:top-1/2 before:-translate-y-1/2'>
          <div className='flex flex-wrap gap-5'>
            <h5 className='text-lg uppercase text-white'>Misr University for Science and Technology</h5>
            <span className='text-[#888888]'>(2018 - 2022)</span>
          </div>
          <h3 className='text-white text-3xl mt-3.5'>Information Technology - Computer Science</h3>
          <div className='mt-5'>
            <p className='text-[#888888] text-lg'>GPA 3.37 / 4.0 (Very good with honors)</p>
          </div>
        </div>
      </div>),
    },
    {
      label: "Skills",
      value: "skills",
      desc: (<div>
        <ul className='text-[#888888] text-lg'>
          <li className='mt-4'>HTML, CSS</li>
          <li className='mt-4'>Bootstrap, Tailwind, SASS</li>
          <li className='mt-4'>JavaScript, TypeScript</li>
          <li className='mt-4'>React.js, Next.js</li>
          <li className='mt-4'>Redux.js, React Query</li>
          <li className='mt-4'>RESTful APIs</li>
          <li className='mt-4'>React Native</li>
          <li className='mt-4'>Git, Github</li>
        </ul>
      </div>),
    },
  ];









  return (
    <>
      <div>
        <h2 className='text-lg font-medium text-[#987750] uppercase'>About me</h2>

        <div className=' mt-5'>

          <div>
            <table className='w-full sm:w-3/4 table-fixed'>
              <tbody>
                <tr>
                  <td className='py-2 pr-2.5 uppercase text-lg font-medium text-[#888888]'>Name</td>
                  <td className='py-2 pr-2.5 text-lg'>Mohammed Ismail</td>
                </tr>
                <tr>
                  <td className='py-2 pr-2.5 uppercase text-lg font-medium text-[#888888]'>Address</td>
                  <td className='py-2 pr-2.5 text-lg'>Cairo, Egypt</td>
                </tr>
                <tr>
                  <td className='py-2 pr-2.5 uppercase text-lg font-medium text-[#888888]'>Phone</td>
                  <td className='py-2 pr-2.5 text-lg'>+201070340016</td>
                </tr>
                <tr>
                  <td className='py-2 pr-2.5 uppercase text-lg font-medium text-[#888888]'>Whatsapp</td>
                  <td className='py-2 pr-2.5 text-lg'>+966530853871</td>
                </tr>
                <tr>
                  <td className='py-2 pr-2.5 uppercase text-lg font-medium text-[#888888]'>Email</td>
                  <td className='py-2 pr-2.5 text-lg'>
                    <Link className='border-b border-[#888888] hover:border-white duration-300' href={'mailto:mohammedismail3010@gmail.com'}>mohammedismail3010@gmail.com</Link>
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pr-2.5 uppercase text-lg font-medium text-[#888888]'>Linkedin</td>
                  <td className='py-2 pr-2.5 text-lg'>
                    <Link className='border-b border-[#888888] hover:border-white duration-300' href={'https://www.linkedin.com/in/engmohamedismail/'} target='_blank'>Mohammed Ismail</Link>
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pr-2.5 uppercase text-lg font-medium text-[#888888]'>Github</td>
                  <td className='py-2 pr-2.5 text-lg'>
                    <Link className='border-b border-[#888888] hover:border-white duration-300' href={'https://github.com/Mohammed-Ismail10'} target='_blank'>Mohammed-Ismail10</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



          <div className='mt-10'>
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none bg-transparent p-0 flex-wrap sm:flex-nowrap"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-[#987750] shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={`${activeTab === value ? "text-[#987750]" : "text-[#888888]"} text-3xl`}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>


        </div>

      </div>
    </>
  )
}