import React, { Suspense } from 'react';
import DetailsContainer from '../DetailsContainer';
import { baseURL } from '@/components/baseURL';
import DetailsPageSkeleton from './DetailsPageSkeleton';

const DetailsPage = async ({params}) => {
    const { detailsId }= await params
     const  courseDetailsPromise = fetch(baseURL, { cache: "no-store" }).then((res)=> res.json());
    return (

        <section className='w-full max-w-7xl mx-auto px-5'>
            <Suspense fallback={<DetailsPageSkeleton />}>
             <DetailsContainer courseDetailsPromise={courseDetailsPromise} detailsId={detailsId}/>
            </Suspense>
        </section>
    );
};

export default DetailsPage;