import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/icons/profile.png';
import search from '../../assets/icons/search.png';
import shopping from '../../assets/icons/shopping.png';
import headerSetting from '../../assets/icons/headerSetting.png';
import headerLogo from '../../assets/icons/headerLogo.png';
import headerHeart from '../../assets/icons/headerHeart.png';

const MainHeader = (props) => {
    return (
        <div className='bg-black'>
            <div className='mx-[2%]  flex justify-between items-center'>
                <Link to="/">
                    <img className="h-20 w-auto hidden md:block" src={headerLogo} alt="Logo" />
                </Link>
                <div className="relative w-2/5 mr-[16%] flex justify-between">
                    <Link to="/">
                        <p className='text-primary-gold text-lg mr-4'>Home</p>
                    </Link>
                    <Link to="/contact">
                        <p className='text-primary-gold  text-lg mr-4'>Contact Us</p>
                    </Link>
                    <Link to="/fleet">
                        <p className='text-primary-gold  text-lg mr-4'>Fleet</p>
                    </Link>
                    <Link to="/services">
                        <p className='text-primary-gold  text-lg mr-4'>Our Services</p>
                    </Link>
                    <Link to="/about">
                        <p className='text-primary-gold  text-lg'>About</p>
                    </Link>
                </div>
                <div className='flex'>
                    <Link to="/favorites">
                        <img className="h-8 w-auto mr-4" src={headerHeart} alt="Favorites" />
                    </Link>
                    <img className="h-8 w-auto mr-4" src={headerSetting} alt="Settings" />
                    <img className="h-8 w-auto" src={profile} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
