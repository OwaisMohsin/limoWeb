import React from 'react';

import profile from '../../assets/icons/profile.png'
import search from '../../assets/icons/search.png'
import shopping from '../../assets/icons/shopping.png'
import headerSetting from '../../assets/icons/headerSetting.png'
import headerLogo from '../../assets/icons/headerLogo.png'
import headerHeart from '../../assets/icons/headerHeart.png'
import { Link } from 'react-router-dom';






const MainHeader = (props) => {




    return (

        <div className='bg-white pb-4'>
            <div className='py-4 mx-[2%] flex justify-between items-center ' >

                <img className="h-8 w-auto hidden md:block" src={headerLogo} />

                <div className="relative w-2/5 mr-[16%]">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <img className="h-6 w-auto " src={search} />
                    </span>
                    <input
                        type="text"
                        placeholder={"Search something here"}
                        className="pl-12 pr-3 py-2 border rounded-full w-full focus:outline-none focus:border-blue-500"
                    />
                </div>


                <div className='flex'>
                    <Link to={"/favorites"}>
                        <img className="h-8 w-auto mr-4" src={headerHeart} />
                    </Link>
                    <img className="h-8 w-auto mr-4" src={headerSetting} />
                    <img className="h-8 w-auto" src={profile} />
                </div>
            </div>


        </div>
    )
}

export default MainHeader;