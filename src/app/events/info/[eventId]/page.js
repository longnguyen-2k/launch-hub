import { Card, Image } from "antd";
import styles from '../../../../styles/event.module.css'
import ResgiterPage from "./RegisterPageBtn";
import EventInfomation from "./EventInformation";
import ResgiterPage2 from "./RegisterPageBtn2";
export default function page() {
    const item = {
        title: "ttt",
        imageUrl: "https://2.bp.blogspot.com/_-SB4G4PUl8M/TLh1AMpTsLI/AAAAAAAAABA/rmxFhQibzas/s1600/beautiful-car.jpeg"
    }
    return (
        <div>
            <div className={styles['image-container']}>
                <div className={styles['image-wrapper']}>
                    <img src={item.imageUrl} alt={item.title} className={styles['image']} />
                </div>
            </div>
            <h1 className={styles['event-title']} >The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className={styles['center-align']}><ResgiterPage/> </div>
            <h2 className={styles['sub-title']}>  Event information</h2>
            <div> <EventInfomation/> </div>
            <h2 className={styles['sub-title']}> About this event</h2>
            <p className={styles['content']}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac. Posuere enim, mi pharetra neque proin dictum amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac. Posuere enim, mi pharetra neque proin dictum amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac. Posuere enim, mi pharetra neque proin dictum amet. </p>
            <ResgiterPage2/>

        </div>
    );
}
