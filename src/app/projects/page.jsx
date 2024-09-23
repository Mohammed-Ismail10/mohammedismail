
import React from 'react'
import oppa from '../../images/oppa.png'
import yummy from '../../images/yummy.png'
import game from '../../images/game-over.png'
import freshcart from '../../images/freshcart.png'
import linksnote from '../../images/links-note.png'
import weather from '../../images/weather.png'

import ProjectCard from '../_components/projectCard/page.jsx'

export default function Projects() {
  return (
    <>
      <div className='pb-5'>
        <h2 className='text-lg font-medium text-[#987750] uppercase'>My Projects</h2>
        
        <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-7'>
          <ProjectCard projectDetails={{
            projectImage: oppa,
            projectName: 'OPPA Dashboard',
            projectConsdiered: 'Dashboard',
            projectDesc: 'Dashboard allows the admin to manage the application and monitor the number of users and the gifts exchanged between them.',
            tools: ['HTML', 'CSS', 'Bootstrap', 'JavaSript', 'React'],
            sourceLink: 'https://github.com/Mohammed-Ismail10/oppa-dashboard',
            browseLink: 'https://mohammed-ismail10.github.io/oppa-dashboard/',
          }} />
          <ProjectCard projectDetails={{
            projectImage: yummy,
            projectName: 'Yummy',
            projectConsdiered: 'Meals',
            projectDesc: 'Web app shows many of the meals from different countries and several categories and allow to user go to website of the meal and go to youtube to watch video about how to work this meal.',
            tools: ['HTML', 'Tailwind', 'JavaScript', 'Next.js', 'Redux'],
            sourceLink: 'https://github.com/Mohammed-Ismail10/Yummy',
            browseLink: 'https://yummy-kohl-three.vercel.app/',
          }} />
          <ProjectCard projectDetails={{
            projectImage: game,
            projectName: 'Game Over',
            projectConsdiered: 'Games',
            projectDesc: 'Website allows you browse a lot of games and know details about them by different categories and many of platform, and know details about them.',
            tools: ['HTML', 'CSS', 'Bootstrap', 'JavaSript', 'React', 'Redux'],
            sourceLink: 'https://github.com/Mohammed-Ismail10/Game-Over',
            browseLink: 'https://mohammed-ismail10.github.io/Game-Over/',
          }} />
          <ProjectCard projectDetails={{
            projectImage: freshcart,
            projectName: 'Fresh Cart',
            projectConsdiered: 'E-commerce',
            projectDesc: 'E-commerce website show some products for the user he can add products to wishlist or cart and buy it.',
            tools: ['HTML', 'CSS', 'Bootstrap', 'JavaSript', 'React', 'Redux'],
            sourceLink: 'https://github.com/Mohammed-Ismail10/FreshCart',
            browseLink: 'https://mohammed-ismail10.github.io/FreshCart/',
          }} />
          <ProjectCard projectDetails={{
            projectImage: linksnote,
            projectName: 'Links Note',
            projectConsdiered: 'Notes',
            projectDesc: 'Web application allows the user to save his favorite sites or that he uses frequently.',
            tools: ['HTML', 'Bootstrap', 'JavaSript'],
            sourceLink: 'https://github.com/Mohammed-Ismail10/Links-note',
            browseLink: 'https://mohammed-ismail10.github.io/Links-note/',
          }} />
          <ProjectCard projectDetails={{
            projectImage: weather,
            projectName: 'Weather',
            projectConsdiered: 'weather',
            projectDesc: 'Website allow us search about any city in world and know forecast temperatures for it next 3 days.',
            tools: ['HTML', 'CSS', 'Bootstrap', 'JavaSript'],
            sourceLink: 'https://github.com/Mohammed-Ismail10/Weather-Temperatures',
            browseLink: 'https://mohammed-ismail10.github.io/Weather-Temperatures/',
          }} />







        </div>
      </div>
    </>
  )
}
