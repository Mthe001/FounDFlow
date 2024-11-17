import React from 'react';
import Carousel from './Carousel';

const Header = () => {
    return (
        <div className='border border-red-500'>
            <section className=''>
                <section className='title text-center'>
                    <h1 className='text-3xl font-semibold text-slate-600'>Winter is not easy for   <span className='text-red-500'>Some</span><span className='text-orange-500'>!</span></h1>
                </section>
                {/* carousel banner here using embla js */}
                <Carousel />
            </section>
        </div>
    );
};

export default Header;