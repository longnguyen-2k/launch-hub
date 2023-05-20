import GalleryEvents from "./GalleryEvents";
import SearchBar from "./SearchBar";
import SearchBox from "./SearchBox";
import styles from '../../styles/event.module.css';
export default function page() {
    return (
        <div>
            <h1>Home Page</h1>
            <SearchBox />
            <div className={styles['text-header']}> Upcoming Events (19) </div>
            <GalleryEvents/>
        </div>
    );
}
