import React from 'react';

import Button from '@/app/_components/Forms/Buttons/Button';

const Playground = () => {
    return (
        <>
            <Button variant="primary" label="Primary" />
            <Button variant="secondary" label="Secondary" />
            <Button variant="success" label="Success" />
            <Button variant="danger" label="Danger" />
            <Button variant="warning" label="Warning" />
            <Button variant="info" label="Info" />
        </>
    );
};

export default Playground;
