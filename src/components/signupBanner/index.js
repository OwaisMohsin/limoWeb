import React, { useState } from 'react';
import './index.css'; // Import CSS for styling
import AuthImage from '../../assets/icons/authBackground.png'
import AuthLogo from '../../assets/icons/authLogo.png'

const SignupBanner = () => {


    return (


        <div className="">
            <img
                src={AuthImage}
                alt="Signup"
                className="signup-image"
            />

        </div>

    );
};

export default SignupBanner;
