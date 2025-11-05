import React, { useContext, useEffect, useRef } from 'react'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'

const DoctorsList = () => {
  const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext)
  const { backendUrl } = useContext(AppContext)
  const fileInputRef = useRef({}) // store refs for each doctor image input

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  // 👇 handle image update
  const handleImageChange = async (doctorId, file) => {
    if (!file) return
    const formData = new FormData()
    formData.append('image', file)

    try {
      const { data } = await axios.put(
        `${backendUrl}/api/admin/update-doctor-image/${doctorId}`,
        formData,
        { headers: { aToken } }
      )

      if (data.success) {
        toast.success('Doctor image updated successfully!')
        getAllDoctors()
      } else {
        toast.error(data.message || 'Image update failed')
      }
    } catch (error) {
      console.error(error)
      toast.error('Error updating image')
    }
  }

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium mb-6'>All Doctors</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
        {doctors.map((item, index) => (
          <div
            key={item._id || index}
            className='border border-[#C9D8FF] rounded-xl p-5 w-full max-w-[260px] 
                       flex flex-col items-center text-center
                       cursor-pointer hover:shadow-md transition-all duration-300'
          >
            {/* 👇 Circle Image */}
            <div
              className='w-24 h-24 bg-[#EAEFFF] rounded-full overflow-hidden flex justify-center items-center relative'
              onClick={() => fileInputRef.current[item._id]?.click()}
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-cover rounded-full'
              />
              <div className='absolute bottom-0 bg-black bg-opacity-40 text-white text-xs py-1 w-full cursor-pointer'>
                Change
              </div>
              <input
                type='file'
                accept='image/*'
                ref={(el) => (fileInputRef.current[item._id] = el)}
                style={{ display: 'none' }}
                onChange={(e) => handleImageChange(item._id, e.target.files[0])}
              />
            </div>

            {/* 👇 Info */}
            <div className='mt-4'>
              <p className='text-[#262626] text-lg font-semibold'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm mb-2'>{item.speciality}</p>
              <label className='flex justify-center items-center gap-1 text-sm cursor-pointer'>
                <input
                  type='checkbox'
                  checked={item.available}
                  onChange={() => changeAvailability(item._id)}
                />
                <span>Available</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList
