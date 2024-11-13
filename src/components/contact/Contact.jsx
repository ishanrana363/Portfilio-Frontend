import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailStore from '../../api-request/emailStore';
import { emailAlert } from '../../helper/emailAlert';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loader from '../loder/Loder';

const Contact = () => {
  window.scrollTo(0, 0);
  const { sendEmailApi } = emailStore();
  const [loader, setLoader] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const msg = e.target.msg.value;
    const phone = e.target.phone.value;

    const payload = { name, email, msg, phone };

    const resp = await emailAlert(); // User confirmation popup

    if (resp.isConfirmed) {
      try {
        setLoader(true); // Show loader
        const res = await sendEmailApi(payload); // Send email request
        setLoader(false); // Hide loader

        if (res) {
          Swal.fire({
            title: 'Sent!',
            text: 'Email sent successfully.',
            icon: 'success',
          });
        } else {
          toast.error('Failed to send email');
        }
      } catch (error) {
        setLoader(false); // Hide loader on error
        toast.error('Something went wrong. Please try again.');
      }
    }

    e.target.reset(); // Reset form fields
  };

  return (
    <>
      {/* Loader Display */}
      {loader && (
        <div className="">
          <Loader />
        </div>
      )}

      <div className="bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 font-mono">
        <div className="max-w-screen-xl mx-auto text-gray-950 py-9">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-10 bg-gray-50">
            {/* Contact Info Section */}
            <div className="flex-1">
              <h2 className="md:text-4xl font-bold md:mb-4 text-gray-800">Get In Touch</h2>
              <p className="text-gray-950 mb-2 md:text-[16px] text-[10px] md:mb-6">
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
                    <p className="text-gray-900">01751586238</p>
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
                    <p className="text-gray-900">ishanrana094@gmail.com</p>
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
                    <p className="text-gray-900">Dinajpur, Birol</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex-1 bg-white p-8 shadow-md rounded-md">
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>

                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  required
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />

                <textarea
                  placeholder="Message"
                  name="msg"
                  required
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 h-32"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white md:text-[16px] text-[10px] py-2 md:py-3 rounded-md hover:bg-blue-700 transition"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
