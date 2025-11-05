import React from 'react'
import { Link } from 'react-router-dom'

// ✅ Import relevant icons from react-icons
import { FaUserMd, FaBrain, FaBaby, FaStethoscope } from 'react-icons/fa'
import { GiStomach, GiFemale } from 'react-icons/gi'

const SpecialityMenu = () => {
  // ✅ Local speciality list with icon components
  const specialityData = [
    { speciality: 'General physician', icon: <FaStethoscope className="text-4xl text-primary" /> },
    { speciality: 'Gynecologist', icon: <GiFemale className="text-4xl text-primary" /> },
    { speciality: 'Dermatologist', icon: <FaUserMd className="text-4xl text-primary" /> },
    { speciality: 'Pediatricians', icon: <FaBaby className="text-4xl text-primary" /> },
    { speciality: 'Neurologist', icon: <FaBrain className="text-4xl text-primary" /> },
    { speciality: 'Gastroenterologist', icon: <GiStomach className="text-4xl text-primary" /> },
  ]

  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      {/* ✅ Horizontal Scroll List */}
      <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto scrollbar-hide px-4'>
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-all duration-500'
          >
            <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#EAEFFF] flex items-center justify-center mb-2 shadow-md'>
              {item.icon}
            </div>
            <p className='font-medium text-center'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
