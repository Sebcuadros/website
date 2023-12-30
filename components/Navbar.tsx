import React, { FC } from 'react';
import Clock from './Clock';

const Navbar: React.FC = () => {
    return (
        <div className="relative grid h-20 w-full justify-end pr-5 z-10">
            <Clock />
        </div>
    )
};

export default Navbar;