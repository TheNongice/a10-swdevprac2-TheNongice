import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from 'next/link';

export default async function TopMenu() {
    const session = await getServerSession(authOptions);
    
    return (
        <div className={styles.menucontainer + ' ' + 'bg-orange-300'}>
            <div className={styles.leftmenu}>
                { 
                    session? <Link href='/api/auth/signout' className="bg-orange-600 px-2 py-1 mx-2 text-white hover:bg-orange-700">Sign-Out {session.user.name}</Link> : <Link  href='/api/auth/signin' className="bg-orange-600 px-2 py-1 mx-2 text-white hover:bg-orange-700">Sign-In</Link>
                }
                <TopMenuItem title="My Booking" pageRef='/mybooking' />
                
            </div>

            <div className={styles.rightmenu}>
                <TopMenuItem title="Booking" pageRef='/booking' />
                <Image src={'/img/logo.png'} alt="Event Logo" className={styles.logoimg} width={100} height={40} />
            </div>
        </div>
    );
}
