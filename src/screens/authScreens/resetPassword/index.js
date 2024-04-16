import React, { useState } from 'react';
import SignupBanner from '../../../components/signupBanner';
import SignupLogo from '../../../components/signupLogo';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle reset password logic here
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:mr-20">
                {/* Reset Password Form */}
                <div className="mx-5 md:mx-0">
                    <SignupLogo />
                    <h6 className='text-center mt-1 mb-4 text-2xl font-semibold'>Password Reset</h6>
                    <h2 className='mt-6 mb-4'>Provide your new password!</h2>
                    <Form
                        name="reset_password_form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <span className='font-semibold'>Password</span>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>
                        <span className='font-semibold'>Confirm Password</span>
                        <Form.Item
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please input your confirm password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                        </Form.Item>
                        <Form.Item>
                            <Link to={"/"}>
                                <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: "#000000" }}>
                                    Reset
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="md:ml-20 mt-10 md:mt-0 hidden lg:block">
                <SignupBanner />
            </div>
        </div>
    );
};

export default ResetPassword;
