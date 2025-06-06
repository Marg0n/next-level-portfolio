import Loading from '@/components/shared/loader/Loading';
import React from 'react';

const loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-[80vh] bg-gray-100">
            <Loading />
        </div>
    );
};

export default loading;