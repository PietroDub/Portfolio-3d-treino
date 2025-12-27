import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'

const Project = ({title, description, subDescription, href, 
    image, tags, setPreview} ) => {
        const [isHidden, setIsHidden] = useState(false);
  return (
    <>
    <div className='flex-wrap items-center justify-between py-10 space-y-14
    sm:flex sm:space-y-0' onMouseEnter={() => setPreview(image)} 
    onMouseLeave={() => setPreview(null)}>
      <p className='text-2xl'>Título</p>
      <div>
        <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag) => (
                <span key={tag.id}> {tag.namme} </span>
            ))}
        </div>
      </div>
      <button onClick={() => setIsHidden(true)}
       className='flex items-center gap-1 cursor-pointer hover-animation'>
        <img src="assets/arrow-right.svg" alt="arrow right" className='w-5' />
      </button>
    </div>
    <div className='bg-gradiant-to-r from-transparent via-neutral-700
    to-transparent h-[1px] w-full'/>
    {isHidden && <ProjectDetails  
        title={title}
        description={description}
        subDescription={subDescription}
        image={image}
        tags={tags}
        href={href} 
        closeModel={() => setIsHidden(false)}
    />}
    </>
  )
}

export default Project
