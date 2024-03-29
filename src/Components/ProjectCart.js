import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion';


export default function ProjectCart({ languages, image, projectTitle, description, targetUrl=null,github }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div>
                <img className={image} src={image} alt="ecommerce" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {projectTitle}
                    </h5>

                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    {description}
                </p>
                <div className='flex flex-wrap justify-evenly gap-2 '>
                    {
                         languages.map((lang, index) => (
                            <span key={index} className='bg-slate-900 p-1 text-white font-bold'>{lang} </span>

                        ))
                    }
                </div>
                {
                    targetUrl ? <a href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                > Live Demo <AiOutlineArrowRight /></a> : null
                }
               
                <a href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 ml-8"
                > GitHub <AiOutlineArrowRight /></a>
            </motion.div>
        </motion.div>

    )
}
