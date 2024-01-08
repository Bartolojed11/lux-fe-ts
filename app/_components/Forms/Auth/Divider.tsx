'use client';

import React from 'react';

interface label {
    label: string;
}

const Divider = ({ label }: label) => {
    return (
        <>
            <div>
                <p>{label}</p>
            </div>
        </>
    );
};

export default Divider;
