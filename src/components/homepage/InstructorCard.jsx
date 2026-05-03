import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';

const InstructorCard = ({instructorsPromise}) => {
    const instructorData = use(instructorsPromise);
    const x = instructorData.filter((instructor)=> Number(instructor.rating) === Number(5))
    return (
     <>
      {x.map((instructor, index) => {
          return (
            <Card key={index}>
                <div className='flex items-center justify-center'>
                <Image className='rounded-full' src={instructor.instructorImage} width={100} height={100} alt={instructor.instructor} />

                </div>
              
              <Card.Header>
                <Card.Title className='text-center'> {instructor.title} </Card.Title>
                <Card.Description className='text-center'>{instructor.description}</Card.Description>
              </Card.Header>
              <Card.Footer>
                <Link
                  aria-label="Go to Acme Creator Hub (opens in new tab)"
                  href="https://heroui.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {instructor.tip}
                </Link>
              </Card.Footer>
            </Card>
          );
        })} 
     </>
    );
};

export default InstructorCard;