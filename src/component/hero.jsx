import React from 'react'
import GambarGopal from '../assets/gopal.png'
import { FaStar, FaYoutube } from 'react-icons/fa'
import Gopas from "../assets/gops.jpeg"

const Hero = () => {
    return (
        <>


            <div className='min-h-[700px] center relative'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0'>
                        {/* Text Conten */}
                        <div className="space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-bold md:text-6xl">Aramugam</h1>
                                <h1 className="text-4xl text-secondary font-bold">Gopal</h1>
                            </div>
                            <p className="text-gray-500 text-sm font-semibold">
                                Nama lengkap Gopal dalam serial BoBoiBoy adalah Gopal A.R. Kumar. Gopal memiliki beberapa julukan, di antaranya:
                                Gopal Pizza Boy
                                Aramugam
                                Gopalji
                                Gopalroka
                                Mama
                                Anak Raksasa Gurunda
                                Gopeng
                            </p>
                            <div className="mx-auto sm:mx-0">
                                <button className="btn-primary flex items-center justify-center gap-3">
                                    Play On
                                    <span>
                                        <FaYoutube className="text-3xl" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* gambar Conten */}
                        <div className="relative" >
                            <img src={GambarGopal} alt="" className="w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-30" />
                            <div className=" absolute z-0 bottom-0 left-0 bg-black w-[260px] h-[20px] mx-auto blur-3xl">

                            </div>
                        </div>
                        {/* Text Conten */}
                        <div className='sm:pl-16 md:pl-24 flex justify-center sm:justify-end'>
                            <div className="flex items-center justify-end">
                                <div className='space-y-4'>

                                    <img src={Gopas} alt="" className="w-full h-[200px] sm:h-[250px]  object-cover rounded-xl shadow-md hover:scale-110 duration-300" />
                                    <p className='text-sm flex items-center gap-2'>
                                        5.0{""}
                                        <span>
                                            <FaStar className=' text-secondary' />
                                        </span>

                                    </p>
                                    <p className='text-sm text-gray-400'>
                                        Monsta
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
