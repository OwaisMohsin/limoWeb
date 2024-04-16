import React, { useState } from 'react';
import SignupBanner from '../../../components/signupBanner';
import SignupLogo from '../../../components/signupLogo';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
                {/* Forgot Password Form */}
                <div className="mx-5 md:mx-0">
                    <SignupLogo />
                    <h6 className='text-center mt-1 mb-4 text-2xl font-semibold'>Forgot Password</h6>
                    <h2 className='mt-6 mb-4'>Provide Email to receive code!</h2>
                    <Form
                        name="login_form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <span className='font-semibold'>Email</span>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item>
                            <Link to={"/verifyCode"}>
                                <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: "#000000" }}>
                                    Send Code
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

export default ForgotPassword;
