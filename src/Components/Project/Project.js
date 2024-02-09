import React from 'react'
import ProjectCart from '../ProjectCart'
import { motion } from 'framer-motion';


export default function Project() {
    let project = [
        {
            image : 'ecommerce.jpg',
            projectTitle : 'Ecommerce Project',
            description :"An Ecommerce application using React.js for front end Context API for storing data and Firebase for authentiction React Router for page navigation , GitHub for version control, Firebase for authentication. Developed a seamless cart management system that dynamically updates as users add or remove items",
            languages :[ 'React Js', 'firebase', 'Context api'],
            targetUrl :"https://ecommerce-c6eo.vercel.app/",
            github : 'https://github.com/rupmedhi4/ecommerce'
        },
        {
            image : 'expense_tracker.jpg',
            projectTitle : 'Expense Tracker Project',
            description :'Developed an expense tracker app in which user can add, delete and update expense React JS DEVELOPER Premium feature are also introduced to get dark mode and Download expenses Utilize React.js libraray for creating this website, Redux for state management, GitHub for version control , FireBase for storing data and authentication',
            languages :['React js ', 'Redux', 'Firebase',],
            targetUrl :"https://complete-expense-tracker.vercel.app/",
            github : "https://github.com/rupmedhi4/complete-expense-tracker-"
        },
        {
            image : 'Restaurent.jpg',
            projectTitle : 'Restaurent Website',
            description :'Developed a responsive restaurant website using HTML, CSS, and Bootstrap,showcasing a visually engaging design optimized for all devices Implemented a visually appealing Carousel section for an interactive and dynamic presentation Designed an grid section to showcase a diverse array of dishes, providing visitors with a captivating visual overview of the menu',
            languages :['Css', 'Bootstrap', 'Html'],
            targetUrl :"https://silly-frangipane-eb5cf5.netlify.app/",
            github : "https://github.com/rupmedhi4/bootstrap---restaurent--project/tree/master"

            
        },
        {
            image : 'news.jpg',
            projectTitle : 'News website',
            description :'Developed a React.js news web application utilizing the News API for data retrieval through the Fetch API. Incorporated features such as a top loading bar to indicate loading progress and implemented infinite scroll for seamless article browsing. Ensured robust error handling to manage failed fetch requests, demonstrating proficiency in frontend development and a commitment to user-centric design and functionality.',
            languages :['Infinite Scroll', 'news api ', 'React js','tailwindcss'],
            github : 'https://github.com/rupmedhi4/News-Fly-Project'
            
        },
        {
            image : 'mailbox.jpg',
            projectTitle : 'Mail Box Client',
            description :'Developed a mailbox client website in which user can receive and send mail to another register user. User can view total unread messages Utilize React.js library for creating this application, Redux for state management, GitHub for version control, FireBase for storing data',
            languages :['React js ', 'Redux', 'Firebase',],
            github : 'https://github.com/rupmedhi4/MailBox'
            
        },
    ]
  return (
    <div className=' mt-4 text-center  w-100 justify-center' id='project'>
      <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} 
            className='flex justify-center text-white font-bold text-[4rem] pt-4 '>Projects</motion.h1>
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
