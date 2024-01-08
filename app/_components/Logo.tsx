import React from 'react';
import Image from 'next/image';

interface LogoProps {
    height?: number | undefined;
    width?: number | undefined;
}

const Logo = ({ height = 48, width = 48 }: LogoProps) => {
    return (
        <>
            <Image
                src="/logo.png"
                width={width}
                height={height}
                alt="Company Logo"
            />
        </>
    );
};

export default Logo;
