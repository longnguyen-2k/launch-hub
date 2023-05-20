'use client';
import { Avatar, Col, Divider, Row } from "antd";
import styles from '../../../../styles/event.module.css';
export default function EventInfomation() {

    return <Row className={styles['right-border']}>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} >
            <div className={styles['display-vertical']}>
                <Avatar src="https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png" size={{ xs: 30, sm: 45, md: 60, lg: 78, xl: 78, xxl:78  }} ></Avatar>
                <span className={styles['title']} > Organizer </span>
                <span className={styles['event-description']} > By Binance Labs </span>
            </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} >                    <div className={styles['display-vertical']}>
            <Avatar src="/image/location.png" size={{ xs: 30, sm: 45, md: 60, lg: 78, xl: 78,xxl:78  }} ></Avatar>
            <span className={styles['title']} > Location </span>
            <span className={styles['event-description']} > Indonesia </span>

        </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} >                     <div className={styles['display-vertical']}>
            <Avatar src="/image/time.png" size={{ xs: 30, sm: 45, md: 60, lg: 78, xl: 78,xxl:78  }} ></Avatar>
            <span className={styles['title']} > Organizer </span>
            <span className={styles['event-description']} > Tue, May 16, 2023, 10:00 am (UTC+7) </span>
            <span className={styles['event-description']} > Tue, May 16, 2023, 11:59 am (UTC+7) </span>

        </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} >                     <div className={styles['display-vertical']}>
            <Avatar src="/image/price.png" size={{ xs: 30, sm: 45, md: 60, lg: 78, xl: 78,xxl:78  }} ></Avatar>
            <span className={styles['title']} > Price </span>
            <span className={styles['event-description']} > Free </span>
        </div>
        </Col>
    </Row>
}