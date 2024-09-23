'use client'
import { useState } from 'react';
import { Button, Drawer, Sidebar } from "flowbite-react";
import { FaBars } from "react-icons/fa6";
import { usePathname, useRouter } from 'next/navigation.js';
import Image from 'next/image.js';
import right from '../../../images/right.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const router = useRouter();
  const pathName = usePathname();

  return (
    <>
        <Sidebar
          className='fixed md:w-1/4 2xl:w-1/6 text-center hidden md:block [&>div]:flex [&>div]:flex-col [&>div]:gap-10 [&>div]:bg-[#181715] [&>div]:rounded-none'
          aria-label="Default sidebar example">
          <div className='text-center flex flex-col items-center'>
            <Image className='w-3/5' src={right} alt='programmer' />
          </div>
          <Sidebar.Items >
            <Sidebar.ItemGroup className='gap-10 flex flex-col'>
              <Sidebar.Item
                onClick={() => { router.push('/'); }}
                className={`${pathName === '/' ? 'text-[#987750]' : 'text-white'}  text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer`} >
                Home
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => { router.push('/about'); }}
                className={`${pathName === '/about' ? 'text-[#987750]' : 'text-white'}  text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer`} >
                About
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => { router.push('/projects'); }}
                className={`${pathName === '/projects' ? 'text-[#987750]' : 'text-white'}  text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer`} >
                Projects
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => { router.push('/contact'); }}
                className={`${pathName === '/contact' ? 'text-[#987750]' : 'text-white'}  text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer`} >
                Contact
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>

        </Sidebar>







      <div className='block md:hidden fixed'>
        <Button className='mt-3 ml-3 bg-transparent text-white enabled:hover:bg-transparent' onClick={() => setIsOpen(true)}><FaBars size={20} /></Button>
      </div>
      <Drawer className="bg-[#181715] flex flex-col justify-between bottom-0 h-auto" open={isOpen} onClose={handleClose}>
        <div>
          <Drawer.Header className="[&>button>svg]:size-12" titleIcon={() => <><span className='text-lg font-extrabold text-[#888888]'>Menu</span></>} />
          <Drawer.Items>
            <Sidebar aria-label="Sidebar with multi-level dropdown example" className="[&>div]:bg-transparent [&>div]:p-0 mt-4" >
              <div className="py-2">
                <Sidebar.Items>
                  <Sidebar.ItemGroup >
                    <Sidebar.Item
                      onClick={() => { router.push('/'); setIsOpen(false) }}
                      className={`${pathName === '/' ? 'text-[#987750]' : 'text-white'} text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer `} >
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item
                      onClick={() => { router.push('/about'); setIsOpen(false) }}
                      className={`${pathName === '/about' ? 'text-[#987750]' : 'text-white'} text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer `}  >
                      About
                    </Sidebar.Item>
                    <Sidebar.Item
                      onClick={() => { router.push('/projects'); setIsOpen(false) }}
                      className={`${pathName === '/projects' ? 'text-[#987750]' : 'text-white'} text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer `} >
                      Projects
                    </Sidebar.Item>
                    <Sidebar.Item
                      onClick={() => { router.push('/contact'); setIsOpen(false) }}
                      className={`${pathName === '/contact' ? 'text-[#987750]' : 'text-white'} text-3xl hover:text-[#987750] hover:bg-transparent cursor-pointer `} >
                      Contact
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </Sidebar>
          </Drawer.Items>
        </div>
      </Drawer>

    </>
  )
}
