'use client';

import React from 'react';

interface AttributeProps {
    type: React.HTMLInputTypeAttribute;
    name: string;
    placeholder?: string | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
    defaultValue?: any | undefined;
    children?: string | JSX.Element | JSX.Element[];
}

const InputIcon = ({
    type,
    name,
    placeholder,
    onChange,
    value,
    children,
    defaultValue,
}: AttributeProps) => {
    return (
        <div>
            {children}
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange?.(e)}
                name={name}
                value={value}
                defaultValue={defaultValue}
            />
        </div>
    );
};

export default InputIcon;
