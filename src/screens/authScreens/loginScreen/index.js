import React, { useState } from 'react';
import SignupBanner from '../../../components/signupBanner';
import SignupLogo from '../../../components/signupLogo';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    const [checked, setChecked] = useState(false);
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle signup logic here
    };


    function handleChange(e) {
        setChecked(e.target.checked);
    }

    //     const onFinish = (values) => {
    //         console.log('Received values:', values);
    //         // Handle login logic here
    //     };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-black">
            <div className="md:mr-20">
                {/* Signup Form */}
                <div className="mx-5 md:mx-0 w-auto">
                    <SignupLogo />
                    <h6 className='text-center mt-2 mb-4 text-xl text-white'>Welcome back</h6>
                    <h2 className='mt-6 mb-6 text-white'>Login to continue</h2>
                    <Form
                        name="signup_form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >

                        <span className='font-semibold text-white'>Email</span>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>
                        <span className='font-semibold text-white'>Password</span>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>
                        <div className='flex justify-between items-center mb-8'>
                            <input className='text-white' type="checkbox" onChange={handleChange} />
                            <span className='flex-1 ml-2 text-white'>Remember Me</span>
                            {/* <Link to={"/forgotPassword"}>
                                <span className='font-semibold'>Forgot Password?</span>
                            </Link> */}
                        </div>

                        <Form.Item>

                            <Link to={"/home"}>
                                <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: "#f0d192" }}>
                                    Log in
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>

                    <div className='flex justify-center items-center mt m-8'>

                        <p className='text-neutral-400'>Don't have an account? </p>
                        <Link to={"/signup"}>
                            <span className='font-semibold ml-2 text-primary-gold'>Signup</span>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center '>

                        <p className='text-neutral-400'>Continue as</p>
                        <Link to={"/home"}>
                            <span className='font-semibold ml-2 text-primary-gold'>GUEST?</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:ml-20 mt-10 md:mt-0 hidden lg:block">
                <SignupBanner />
            </div>
        </div>
    );
};

export default LoginScreen;
