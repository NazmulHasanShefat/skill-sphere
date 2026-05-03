import { GetApiData } from '@/lib/GetData';
import React, { Suspense } from 'react';
import DetailsContainer from '../DetailsContainer';

const DetailsPage = async ({params}) => {
    const { detailsId }= await params
    console.log(detailsId)
    const courseDetailsPromise = GetApiData("http://localhost:3000/courseData.json");
    return (

        <section className='w-full max-w-7xl mx-auto px-5'>
            <Suspense fallback={<h1>loding...</h1>}>
             <DetailsContainer courseDetailsPromise={courseDetailsPromise} detailsId={detailsId}/>
            </Suspense>
        </section>
    );
};

export default DetailsPage;