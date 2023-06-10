import GalleryEvents from "./GalleryEvents";
import SearchBox from "./SearchBox";
import styles from '../../styles/event.module.css';
export default function page() {
    return (
        <div className="container">
            {/* <h1>Home Page</h1> */}
            <div className={styles['section--search']}>
            <SearchBox />
            </div>
            <div className={styles['text-header']}> Upcoming Events (19) </div>
            <GalleryEvents/>
            <div className={styles['text-header']}> Completed events (130)</div>
            <GalleryEvents/>
        </div>
    );
}
