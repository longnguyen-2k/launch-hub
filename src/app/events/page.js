import GalleryEvents from "./GalleryEvents";
import SearchBar from "./SearchBar";
import SearchBox from "./SearchBox";
export default function page() {
    return (
        <div>
            <h1>Home Page</h1>
            <SearchBox />
            <GalleryEvents/>
        </div>
    );
}
