import getVenue from '@/libs/getVenue';
import Image from 'next/image';

export default async function VenuDetailPage ({params}: {params: {vid: string}}) {
    
    const venueDetails = await getVenue(params.vid);

    return (
        <div className="text-center p-5">
            <h1 className="text-lg font-medium">{venueDetails.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image 
                    src={ venueDetails.data.picture } 
                    alt="Venue Image" width={0} height={0} sizes='100vw' 
                    className='rounded-lg w-[30%]'
                />
                <div className="description-text text-left">
                    <div className='text-md mx-5'>Name: { venueDetails.data.name }</div>
                    <div className='text-md mx-5'>Address: { venueDetails.data.address }</div>
                    <div className='text-md mx-5'>District: { venueDetails.data.district }</div>
                    <div className='text-md mx-5'>Postal Code: { venueDetails.data.postalcode }</div>
                    <div className='text-md mx-5'>Tel: { venueDetails.data.tel }</div>
                    <div className='text-md mx-5'>Daily Rate: { venueDetails.data.dailyrate }</div>
                </div>
            </div>
        </div>
    );
}