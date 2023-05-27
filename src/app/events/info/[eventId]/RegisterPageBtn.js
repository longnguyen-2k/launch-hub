'use client';
import { Button } from "antd";
import Link from "next/link";
import styles from '../../../../styles/event.module.css';

export default function ResgiterPage (){
    return <Link href='/register-event'>
        <Button className={styles['register-btn']}>Go to Registration Page</Button>
    </Link>
}