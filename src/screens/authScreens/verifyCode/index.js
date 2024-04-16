// import React, { useState } from 'react';
// import SignupBanner from '../../../components/signupBanner';
// import SignupLogo from '../../../components/signupLogo';
// import { Typography, Form, Input, Button, Space } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

// const VerifyCode = () => {
//     const [checked, setChecked] = useState(false);
//     function handleChange(e) {
//         setChecked(e.target.checked);
//     }


//     const onFinish = (values) => {
//         console.log('Received values:', values);

//         // Handle login logic here
//     };



//     return (
//         <div class="flex  justify-between items-center">

//             <div className="">
//                 {/* Signup Form */}
//                 <div className="ml-40">
//                     <SignupLogo />
//                     <h6 className='text-center mt-1 mb-4 text-2xl font-semibold' >Check your Mail</h6>
//                     <h2 className='mt-10 text-neutral-400' >We,ve sent a 6-digit confirmation code to </h2>
//                     <span className='font-semibold' >username@gmail.com</span><span className='text-neutral-400' > Make sure you enter correct code.</span>
//                     <Form
//                         className='mt-8'
//                         name="login_form"
//                         style={{ backgroundColor: "white" }}
//                         size="large"
//                         initialValues={{ remember: true }}
//                         onFinish={onFinish}
//                     >

//                         <Input.OTP style={{ height: 60, width: "100%" }} formatter={(str) => str.toUpperCase()} />

//                         <Form.Item className='mt-16' >

//                             <Link to={"/resetPassword"} >
//                                 <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: "#000000" }}>
//                                     Next
//                                 </Button>
//                             </Link>
//                         </Form.Item>
//                     </Form>
//                     <div className='mt m-8' >

//                         <p className='text-neutral-400 text-center' >Didn’t recieve any email? Check in spam or </p>
//                         <p className='font-semibold text-center' >Resend Code</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="right-side">
//                 <SignupBanner />
//             </div>
//         </div>
//     );
// };

// export default VerifyCode;



import React, { useState } from 'react';
import SignupBanner from '../../../components/signupBanner';
import SignupLogo from '../../../components/signupLogo';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const VerifyCode = () => {
    const [checked, setChecked] = useState(false);

    function handleChange(e) {
        setChecked(e.target.checked);
    }

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle login logic here
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:mr-20">
                {/* Verify Code Form */}
                <div className="mx-5 md:mx-0">
                    <SignupLogo />
                    <h6 className='text-center mt-1 mb-4 text-2xl font-semibold'>Check your Mail</h6>
                    <h2 className='mt-10 text-neutral-400'>We've sent a 6-digit confirmation code to </h2>
                    <span className='font-semibold'>username@gmail.com</span>
                    <span className='text-neutral-400'> Make sure you enter the correct code.</span>
                    <Form
                        className='mt-8'
                        name="verify_code_form"
                        style={{ backgroundColor: "white" }}
                        size="large"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <div className='flex justify-center' >

                            <Input.OTP style={{ height: 60 }} formatter={(str) => str.toUpperCase()} />
                        </div>
                        <Form.Item className='mt-16   '>
                            <Link to={"/resetPassword"}>
                                <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "#000000" }}>
                                    Next
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                    <div className='mt m-8'>
                        <p className='text-neutral-400 text-center'>Didn’t receive any email? Check in spam or </p>
                        <p className='font-semibold text-center'>Resend Code</p>
                    </div>
                </div>
            </div>
            <div className="md:ml-20 mt-10 md:mt-0 hidden lg:block">
                <SignupBanner />
            </div>
        </div>
    );
};

export default VerifyCode;
