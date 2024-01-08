'use client';

import React from 'react';
import Link from 'next/link';

import { BsFacebook, BsGoogle } from 'react-icons/bs';

const ThirdPartyLogin = () => {
    return (
        <>
            <div className="continue-with-thirdparty mb-3 mt-3">
                <Link href="#">
                    <BsFacebook />
                    Facebook
                </Link>
                <Link href="#">
                    <BsGoogle />
                    Gmail
                </Link>
            </div>
        </>
    );
};

export default ThirdPartyLogin;
