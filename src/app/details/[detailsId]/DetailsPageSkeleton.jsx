import React from 'react';

const DetailsPageSkeleton = () => {
    return (
        <div className='w-full grid-cols-1 md:grid-cols-2 gap-10 grid'>
            <div className='img-skl bg-gray-200 animate-pulse w-full rounded-xl min-h-[400px]'></div>
            <div className='img-skl mt-10 flex flex-col gap-5 rounded-xl w-full min-h-[400px]'>
                <div className='h-5 w-full bg-gray-200'></div>
                <div className='h-5 bg-gray-200 w-[80%] '></div>
                <div className='h-5 w-[60%] bg-gray-200'></div>
             
                <div className='h-5 mt-10 w-full bg-gray-200'></div>
                <div className='h-5 bg-gray-200 w-[80%] '></div>
                <div className='h-5 w-[60%] bg-gray-200'></div>
            </div>
          
        </div>
    );
};

export default DetailsPageSkeleton;