import React from 'react';
import logo from '../../assets/icons/authLogo.png'; // Import your logo image

const SignupLogo = () => {
    return (
        <div className="flex items-center justify-center">
            {/* Use the img tag and apply Tailwind CSS classes */}
            <img src={logo} alt="Logo" className="h-32 w-auto" />
            {/* Adjust height and width as needed */}
        </div>
    );
};

export default SignupLogo;
