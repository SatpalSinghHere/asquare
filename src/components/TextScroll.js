import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const TextScroll = ({ text, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='flex justify-center w-full'
        >
            <div className={`${className}`}>
                {text}
            </div>
        </motion.div>

    )
}

export default TextScroll
