'use client'
import React from 'react'
import { GoPencil } from "react-icons/go";
import { useState, useRef, useEffect } from 'react';

const ProfileCard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const firstNameRef = useRef(null); // Reference to the first input element
    const lastNameRef = useRef(null);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (event: { key: string; }) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="card bg-base-100 shadow-xl mb-4 p-4 md:p-10 rounded-lg text-gray-800">
            <div className="flex flex-col items-center mb-3">
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus bg-gray-600 text-neutral-content rounded-full w-20 md:w-24">
                        <span className="text-3xl md:text-4xl">CI</span>
                    </div>
                </div>
                <h1 className="text-md md:text-lg font-bold mt-2 md:mt-4">
                    Collins Ikpeyi
                </h1>
                <p className="text-xs md:text-sm">Fisk University</p>
            </div>

            <div className='flex justify-end items-center p-2'>
                {/* Icon to open the modal */}

                <span onClick={openModal}> <GoPencil /> </span>


                {isModalOpen && (
                    <dialog open className="modal fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeModal}>
                        <div onClick={(e) => e.stopPropagation()} className="modal-box relative p-5 bg-stone-100 rounded-md shadow-lg w-auto min-w-md max-w-2xl m-4 md:m-auto">
                            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h1 className="text-md md:text-lg font-bold mb-2 md:mb-4">Edit Profile</h1>
                            <div className="avatar placeholder w-full flex justify-center items-center py-5">
                                <div className="bg-neutral-focus bg-gray-600 text-neutral-content rounded-full w-20 md:w-24">
                                    <span className="text-3xl md:text-4xl">CI</span>
                                </div>
                            </div>
                            <input ref={firstNameRef} type="text" className="input input-bordered w-full mt-4" placeholder="First Name" />
                            <input type="text" className="input input-bordered w-full mt-4" placeholder="Last Name" />
                            <button style={{ background: "#f7b59f" }}
                                className="btn btn-active rounded-full text-black border border-black mt-3">Save Changes</button>
                        </div>
                    </dialog>
                )}
            </div>
        </div>
    )
}

export default ProfileCard