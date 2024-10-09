import React, { useState } from 'react';
import projectStore from '../../api-request/projectStore';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../loder/Loder';

const ProjectForm = () => {
    const [loder, setLoder] = useState(false);
    const { addProjectApi } = projectStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const description = e.target.description.value;
        const project_link = e.target.project_link.value;
        let payload = {
            name,
            email,
            description,
            project_link
        };
        setLoder(true)
        const res = await addProjectApi(payload);
        setLoder(false);
        if (res) {
            toast.success(`Your project was successfully added`)
        } else {
            toast.error(`Failed to add project. Please try again later`)
        }
        e.target.reset();

    }
    return (
        <>
            <div className='max-w-screen-xl mx-auto px-4'>
                <h1 className="text-2xl text-white font-semibold text-center mb-6">Submit Your Project</h1>
                <div className='flex flex-col lg:flex-row items-center'>
                    {/* Form Section */}
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                            <form onSubmit={handleSubmit} >
                                <div className='grid md:grid-cols-2 lg:gap-4 ' >
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name='name'
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name='email'
                                            required
                                            placeholder="Enter your email"
                                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name='description'
                                        required
                                        placeholder="Enter project description"
                                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project_link">
                                        Project Link
                                    </label>
                                    <input
                                        id="project_link"
                                        type="text"
                                        name='project_link'
                                        required
                                        placeholder="Enter the project link"
                                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1728494980/Ishan/u2u5v0itmyagixculjsw.webp"
                            alt="Project"
                            className="w-full lg:w-3/4 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            {
                loder && (
                    <div>
                        <Loader></Loader>
                    </div>
                )
            }
            <Toaster position='top-center' ></Toaster>
        </>
    );
};

export default ProjectForm;
