import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react';

const HeroTest = () => {
    const words = ["Criativas", "Modernas", "Inovadoras"];
    const variants = {
        hidden:{ opacity: 0, x: -50 },
        visible:{ opacity: 1, x: 0}
    };
    
    return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      {/*Para pc*/}
      <div className='flex-col hidden md:flex c-space'>
        <motion.h1 className='text-4xl font-medium'
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1}}
        >Hi, im Pie</motion.h1>
        <div className='flex flex-col items-start'>
            <motion.p className='text-5xl font-medium text-neutral-300'
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{delay:1.2}}
            >Um dev dedicado a criar</motion.p>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}>
                <FlipWords words={words}
                className="font-black text-white text-8xl"/>
            </motion.div> {/* Para componentes */}
            <motion.p className='text-4xl font-medium text-neutral-300'
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{delay:1.8  }}
            >Soluções Web</motion.p>
        </div>
      </div>
      {/*Para celular*/}
      <div className='flex flex-col space-y-6 md:hidden'>
        <motion.p className='text-4xl font-medium'
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{delay:1}}>Hi, im Pie</motion.p>
        <motion.div 
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  ransition={{delay:1.2}}
        >
            <p className='text-5xl font-black text-neutral-300'>
                Criando
            </p>
            <div> <FlipWords words={words} 
            className= "font-bold text-white text-8xl"/></div>
            <motion.p className='text-4xl font-black text-neutral-300'
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{delay:1.8}}
            >
                aplicações Web
            </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroTest
