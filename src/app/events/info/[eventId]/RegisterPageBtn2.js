'use client';
import { Button } from "antd";
import Link from "next/link";
import styles from '../../../../styles/event.module.css';

export default function ResgiterPage2 (){
    return <Link href='/register-event' style={{width:'100%',paddingTop:'30px',paddingBottom:'30px'}}>
        <Button className={styles['register-btn2']}>Go to Registration Page</Button>
    </Link>
}