import '../../styles/button/labelcategory.scss';

export default function LabelCategory({ text, classNames }) {

    return (
        <div className={`${classNames}`}>
            <p>{text}</p>
        </div>
    );
}
