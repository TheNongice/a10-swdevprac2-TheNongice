'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Banner () {
    const cover = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const {data: session} = useSession();

    return (
        <div className="block p-[5px] m-0 w-full h-[50vh] relative">
            <Image
                src={cover[index%4]}
                alt='cover'
                fill={true}
                objectFit='cover'
                onClick={() => {setIndex(index+1);}}
            />
            <div className="m-5 top-1/3 z-20 relative" onClick={() => {setIndex(index+1);}}>
                <div className=" text-center text-white items-center bg-black/40 p-4"> 
                    <h1 className="text-4xl font-medium">where every event finds its venue</h1>
                    <h3 className="text-xl font-serif">Explorer your event with us</h3>
                </div>
            </div>
            {
                session? <div className="z-30 absolute top-5 right-10 font-semibold text-orange-600 text-xl">Hello {session.user?.name}</div>: null
            }
            <button 
                className="bg-orange-600 text-white border border-orange-600 
                        font-semibold py-2 px-2 m-2 rounded z-30 absolute 
                        bottom-0 right-0 hover:bg-orange-800 hover:text-white hover:border-white-1/3"
                onClick={(e) => {e.stopPropagation(); router.push('/venue');}}
                >
                Select Your Venue Now!
            </button>
        </div>
    );
}