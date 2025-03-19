'use client'
import Image from 'next/image'; 
import { useState } from 'react';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({ venueName, imgSrc, onCompare } : { venueName:string, imgSrc:string, onCompare?: Function }) {
    
    const [rating, setRating] = useState<number | null>(0);

    return (
        <InteractiveCard venueName={venueName}>
                <div className='w-full h-[70%] relative rounded-t-lg'>
                    <Image 
                        src={imgSrc}
                        alt='Event Image'
                        fill={true}
                        className='object-cover rounded-t-lg'
                    />
                </div>            
                <div className='w-full h-[10%] p-[10px]'>
                    <p className='font-bold underline'>{venueName}</p>
                    {
                        onCompare? 
                            <Rating
                                name={venueName + ' Rating'}
                                id={venueName + ' Rating'}
                                data-testid={venueName + ' Rating'}
                                value={rating}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e, newVal) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setRating(newVal);
                                    onCompare(venueName, newVal);
                                    console.log(venueName, newVal);
                                }}
                            /> : ''
                    }
                </div>
        </InteractiveCard>
    );
}