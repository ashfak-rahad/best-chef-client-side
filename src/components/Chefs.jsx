import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Chefs = () => {
    const {Chefs } = useContext(AuthContext);
    console.log(Chefs);

    return (
        <div>
            <h1 className=' text-center text-2xl pb-7 font-semibold'>Our Best Chefs</h1>
            <div className='text-center'>

                <h4>This is chefs section  </h4>

            </div>
        </div>
    );
};

export default Chefs;