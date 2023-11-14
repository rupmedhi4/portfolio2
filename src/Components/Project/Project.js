import React from 'react'
import ProjectCart from '../ProjectCart'

export default function Project() {
    let project = [
        {
            image : 'ecommerce.jpg',
            projectTitle : 'Ecommerce Project',
            description :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatum fugit ut sit aspernatur deserunt pariatur quae officiis consequatur officia! Ratione repudiandae autem necessitatibus id ipsa maiores reprehenderit ullam quaerat.',
            languages :['Tailwind Css', 'React Js'],
            targetUrl :"https://ecommerce-c6eo.vercel.app/"
        },
        {
            image : 'expense_tracker.jpg',
            projectTitle : 'Expense Tracker Project',
            description :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatum fugit ut sit aspernatur deserunt pariatur quae officiis consequatur officia! Ratione repudiandae autem necessitatibus id ipsa maiores reprehenderit ullam quaerat.',
            languages :['Css', 'React Js'],
            targetUrl :"https://complete-expense-tracker.vercel.app/"
        },
        {
            image : 'netflix.jpg',
            projectTitle : 'netflix Project',
            description :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatum fugit ut sit aspernatur deserunt pariatur quae officiis consequatur officia! Ratione repudiandae autem necessitatibus id ipsa maiores reprehenderit ullam quaerat.',
            languages :['Pure Css', 'Next Js'],
            targetUrl :"#"
        },
        {
            image : 'videohub.jpg',
            projectTitle : 'Videohub Project',
            description :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatum fugit ut sit aspernatur deserunt pariatur quae officiis consequatur officia! Ratione repudiandae autem necessitatibus id ipsa maiores reprehenderit ullam quaerat.',
            languages :['Chakra UI', 'React Js'],
            targetUrl :"https://reactvideoapp-beta.vercel.app/"
        },
    ]
  return (
    <div className='  text-center  w-100 justify-center'>
      <h1 className='flex justify-center text-white font-bold text-[4rem] pt-4 '>Projects</h1>
      <div className='flex flex-wrap  m-9 justify-evenly gap-4 max-w-[90%]'>
        {
            project.map((project,index)=>(
                <ProjectCart key={index} {...project}/>
            ))
        }
       
      </div>
    </div>
  )
}
