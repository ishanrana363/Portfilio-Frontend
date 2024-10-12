import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className='bg-bgPrimary'>
      <div className='max-w-screen-xl mx-auto text-white py-9'>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-10 bg-gray-50">
          {/* Contact Info Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Contact Info Items */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 text-white p-2 rounded-md">
                  <img
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728754837/Ishan/sre88xoh60eix5aowuzy.png"
                    alt=""
                    width={24}
                    height={24}
                    className="grayscale-icon"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">01751586238</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-900 text-white p-2 rounded-md">
                  <img
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728755795/Ishan/xnivopd7pzldur8jlgei.png"
                    alt=""
                    width={24}
                    height={24}
                    className="grayscale-icon"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">ishanrana094@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-900 text-white p-2 rounded-md">
                  <img
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728755693/Ishan/boelpuyi3wofc8mmdahc.png"
                    alt=""
                    width={24}
                    height={24}
                    className="grayscale-icon"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">Dinajpur, Birol</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-900 text-white p-2 rounded-md">
                  <img
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728755862/hxj4wiejlgkvbb4xvdss.png"
                    alt=""
                    width={24}
                    height={24}
                    className="grayscale-icon"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <p className="text-gray-600">nurse.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 flex space-x-4">
              <NavLink to={""}>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728756189/Ishan/uq01efzohtbzus9oa2fn.png"
                  alt=""
                  width={32}
                  height={32}
                  className="grayscale-icon"
                />
              </NavLink>
              <NavLink to={""}>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728756286/xrskgaueshjbdu7ccigd.png"
                  alt=""
                  width={32}
                  height={32}
                  className="grayscale-icon"
                />
              </NavLink>
              <NavLink to={""}>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728756348/Ishan/fpgcwng9ecsmjbxw43hd.png"
                  alt=""
                  width={32}
                  height={32}
                  className="grayscale-icon"
                />
              </NavLink>
              <NavLink to={""}>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728756396/htjv5sfbhhbljriplddr.png"
                  alt=""
                  width={32}
                  height={32}
                  className="grayscale-icon  "
                />
              </NavLink>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 bg-white p-8 shadow-md rounded-md">
            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div className=" flex flex-col md:flex md:flex-row  gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />

              <textarea
                placeholder="Message"
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 h-32"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-700 transition">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
