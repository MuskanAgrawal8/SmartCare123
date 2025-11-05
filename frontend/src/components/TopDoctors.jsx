import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  // 👇 Limit number of doctors displayed
  const limitedDoctors = doctors.slice(0, 8)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {limitedDoctors.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`)
              scrollTo(0, 0)
            }}
            className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center'
          >
            {/* 👇 Circle-shaped image */}
            <div className='bg-[#EAEFFF] w-32 h-32 mt-4 rounded-full overflow-hidden flex justify-center items-center'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-cover rounded-full'
              />
            </div>

            <div className='p-4 text-center'>
              <div
                className={`flex items-center justify-center gap-2 text-sm ${
                  item.available ? 'text-green-500' : 'text-gray-500'
                }`}
              >
                <p
                  className={`w-2 h-2 rounded-full ${
                    item.available ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                ></p>
                <p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className='text-[#262626] text-lg font-medium mt-2'>
                {item.name}
              </p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 👇 “More” button redirects to full doctor list */}
      <button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'
      >
        More
      </button>
    </div>
  )
}

export default TopDoctors
