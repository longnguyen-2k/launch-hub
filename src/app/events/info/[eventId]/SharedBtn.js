import '@fortawesome/fontawesome-free/css/all.css';
import styles from '../../../../styles/event.module.css'

export default function ShareBtn() {
  return (
    <div className={styles['social-media-box']}>
      <a href="#" className={styles['social-media-button']} >
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className={styles['social-media-button']} >
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className={styles['social-media-button']} >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#" className={styles['social-media-button']} >
        <i className="fas fa-envelope"></i>
      </a>
      <a href="#" className={styles['social-media-button']} >
        <i className="fab fa-facebook-messenger"></i>
      </a>
    </div>
  );
}
