import Link from 'next/link.js'
import React from 'react'

export default function Contact() {
  return (
    <>
      <div>
        <h3 className='text-lg font-medium text-[#987750] uppercase'>Contact Me</h3>
        <div className='mt-10'>
          <h2 className='text-5xl relative pb-5 after:content-[""] after:absolute after:h-0.5 after:w-36 after:bg-[#fff3] after:bottom-0 after:left-0'>Get In Touch</h2>
          <div className='mt-10 flex flex-col gap-10'>
            <div>
              <p className='uppercase text-[#888888] text-sm mb-5'>Email</p>
              <Link className='border-b text-lg border-[#888888] hover:border-white duration-300' href={'mailto:mohammedismail3010@gmail.com'}>mohammedismail3010@gmail.com</Link>
            </div>
            <div>
              <p className='uppercase text-[#888888] text-sm'>Phone</p>
              <p className='text-3xl mt-5'>+201070340016</p>
            </div>
            <div>
              <p className='uppercase text-[#888888] text-sm'>Whatsapp</p>
              <p className='text-3xl mt-5'>+966530853871</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
