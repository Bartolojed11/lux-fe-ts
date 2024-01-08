'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import InputIcon from '@/app/_components/Forms/InputIcon';
import AuthDivider from '@/app/_components/Forms/Auth/Divider';
import ThirdPartyLogin from '@/app/_components/Forms/Auth/ThirdPartyLogin';
import Button from '@/app/_components/Forms/Buttons/Button';
import Logo from '@/app/_components/Logo';

import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

import { stateSetter } from '@/utils/forms';

const LoginComponent = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log({ event });
        stateSetter(event, setFormData);
    };

    return (
        <>
            <section className="">
                <Logo />
                <div>
                    <h1 className="text-center">Welcome!</h1>
                    <p className="text-center">Lorem ipsum</p>
                </div>
                <form method="post">
                    <InputIcon
                        type="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        name="email"
                        value={formData.email}
                    >
                        <AiOutlineUser />
                    </InputIcon>

                    <InputIcon
                        type="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        name="password"
                        defaultValue={formData.password}
                    >
                        <AiOutlineLock />
                    </InputIcon>

                    <Link href="/password/forgot">Forgot Password</Link>

                    <Button variant="dark" type="submit" label="Log in" />

                    <AuthDivider label="Or continue With" />

                    <ThirdPartyLogin />

                    <AuthDivider label="No account yet?" />

                    <Button
                        variant="light"
                        onClick={() => router.push('sign-up')}
                        label="Sign Up"
                    />
                </form>
            </section>
        </>
    );
};

export default LoginComponent;
