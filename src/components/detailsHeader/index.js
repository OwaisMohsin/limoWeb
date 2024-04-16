import React from 'react';

import profile from '../../assets/icons/profileWhite.png'
import search from '../../assets/icons/searchWhite.png'
import shopping from '../../assets/icons/shoppingWhite.png'

import webBanner from '../../assets/icons/headerBack.png'
import { Link } from 'react-router-dom';






const DetailsHeader = () => {

    const subMenues = [
        "All Categories",
        "Memories",
        "Processor",
        "Motherboards",
        "Networking",
        "Power Supplies",
        "SSD"

    ]


    return (
        //  <div className='z-10 relative' style={{ backgroundImage: `url(${webBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px' }}>
        <div className=''>
            <div className='absolute w-full' >
                <div className='py-6 mx-[5%] flex border-b-2 justify-between items-center ' >
                    <img className="h-6 w-auto" src={search} />
                    <div className='flex'>
                        <img className="text-white h-6 w-auto" src={profile} />
                        <span className='ml-2 text-white font-semibold hidden md:block'>Account</span>
                        <Link to={"/cart"} >
                            <img className="h-6 w-auto ml-4" src={shopping} />
                        </Link>
                        <Link to={"/cart"} >
                            <span className='ml-2 text-white font-semibold hidden md:block'>Shopping</span>
                        </Link>

                    </div>
                </div>

                <div className='hidden md:block' >
                    <div className='mx-4 md:mx-[5%] mt-4 flex justify-between'>
                        {
                            subMenues.map((item, index) => (
                                <p key={index} className='text-white text-xs font-semibold'>{item}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <img className='w-full' src={webBanner} />
        </div>



    )
}

export default DetailsHeader;