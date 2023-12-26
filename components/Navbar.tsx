import React, { FC } from 'react';
import Clock from './Clock';

const Navbar: React.FC = () => {
    return (
        <div className="relative grid h-20 w-full justify-end content-center pr-5 z-40">
            <Clock />
        </div>
    )
};

export default Navbar;