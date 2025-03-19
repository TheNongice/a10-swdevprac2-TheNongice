import Link from "next/link";
import styles from './topmenu.module.css';

export default function TopMenuItem({ title, pageRef }: { title:string, pageRef:string }) {
    return (
        <Link href={pageRef} className={styles.itemcontainer + ' ' + 'px-2 py-1 text-orange-950 hover:underline hover:bg-orange-700/45 hover:text-white hover:rounded-md'}>
            {title}
        </Link>
    );
}