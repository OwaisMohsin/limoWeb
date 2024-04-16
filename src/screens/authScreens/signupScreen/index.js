import React, { useState } from 'react';
import SignupBanner from '../../../components/signupBanner';
import SignupLogo from '../../../components/signupLogo';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
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
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:mr-20">
                {/* Signup Form */}
                <div className="mx-5 md:mx-0 w-auto">
                    <SignupLogo />
                    <h6 className='text-center mt-2 mb-4 text-xl '>Welcome</h6>
                    <h2 className='mt-6 mb-6'>Provide details for account Creation</h2>
                    <Form
                        name="signup_form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        {/* <span className='font-semibold'>Email</span>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input style={{ width: 400 }} prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item> */}
                        <span className='font-semibold'>Email</span>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>
                        <span className='font-semibold'>Password</span>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>
                        <span className='font-semibold'>Confirm Password</span>
                        <Form.Item
                            name="cpassword"
                            rules={[{ required: true, message: 'Please input your confirm password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                        </Form.Item>


                        <Form.Item>

                            <Link to={"/home"}>
                                <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: "#3563E9" }}>
                                    Signup
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center items-center mt m-8'>

                        <p className='text-neutral-400'>Already have an account? </p>
                        <Link to={"/"}>
                            <span className='font-semibold ml-2 text-blue-600'>Login</span>
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

export default SignupScreen;
