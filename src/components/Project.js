import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    initial: {
        width: "20%",
        transition: {
            duration: 0.2,               
        },
    },
    expand: {
        width: "60%",
        transition: {
            duration: 0.5,   
        },
    }
}
const childVariants = {
    initial: {
        opacity: 0,
        transition: {
            duration: 0.1,
        }
    },
    expand: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.7
        }
    }

}

const Project = () => {
    
    return (
        <motion.div
            variants={variants}
            initial="initial"
            whileHover="expand"
            animate="initial"
            className='w-1/5 h-96 bg-center bg-hero-pattern rounded-xl p-2 text-center text-white mx-1 duration-150 overflow-hidden flex justify-center'>
            <div className=''>
                <span className='text-3xl'>Project Name</span>
                <br />
                <br />
                <motion.span
                    variants={childVariants}                    
                >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </motion.span>
            </div>
        </motion.div>
    )
}

export default Project
