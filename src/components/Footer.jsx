
import bannerImage from '../assets/banner1.png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <img src={bannerImage} alt="Banner" style={styles.image} />
    </footer>
  );
};

const styles = {
  footer: {
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '80%',
    height: 'auto',
  },
  description: {
    margin: 0,
  },
};

export default Footer;