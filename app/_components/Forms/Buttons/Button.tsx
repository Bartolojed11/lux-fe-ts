'use client';

import React from 'react';

import { ButtonInterface } from '@/types/forms/ButtonTypes';

const PRIMARY =
    'tw-bg-primary-100 hover:tw-bg-primary-200 active:tw-bg-primary-200 tw-m-2 tw-rounded-md tw-px-3 tw-py-1 tw-text-base hover:tw-shadow lg:tw-px-4 lg:tw-py-1';
const SECONDARY =
    'tw-bg-secondary-100 hover:tw-bg-secondary-200 active:tw-bg-secondary-200 tw-m-2 tw-rounded-md tw-px-3 tw-py-1 tw-text-base hover:tw-shadow lg:tw-px-4 lg:tw-py-1';
const SUCCESS =
    'tw-bg-success-100 hover:tw-bg-success-200 active:tw-bg-success-200 tw-m-2 tw-rounded-md tw-px-3 tw-py-1 tw-text-base hover:tw-shadow lg:tw-px-4 lg:tw-py-1';
const DANGER =
    'tw-bg-danger-100 hover:tw-bg-danger-200 active:tw-bg-danger-200 tw-m-2 tw-rounded-md tw-px-3 tw-py-1 tw-text-white hover:tw-shadow lg:tw-px-4 lg:tw-py-1';
const WARNING =
    'tw-bg-warning-100 hover:tw-bg-warning-200 active:tw-bg-warning-200 tw-m-2 tw-rounded-md tw-px-3 tw-py-1 tw-text-white  hover:tw-shadow lg:tw-px-4 lg:tw-py-1';
const INFO =
    'tw-bg-info-100 hover:tw-bg-info-200 active:tw-bg-info-200 tw-m-2 tw-rounded-md tw-px-3 tw-py-1 tw-text-white hover:tw-shadow lg:tw-px-4 lg:tw-py-1';

const BUTTONS = {
    primary: PRIMARY,
    secondary: SECONDARY,
    success: SUCCESS,
    danger: DANGER,
    warning: WARNING,
    info: INFO,
};

const Button = ({
    type = 'button',
    label,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    variant = 'primary',
    disabled = false,
}: ButtonInterface) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onFocus={onFocus}
                onBlur={onBlur}
                disabled={disabled}
                className={BUTTONS[variant]}
            >
                {label}
            </button>
        </>
    );
};

export default Button;
