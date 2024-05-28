import style from './Header.module.css';
import milkyMooImage from '../assets/milkyMooImage.png';

export default function Header() {
  return (
    <nav className={style.menu} style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={milkyMooImage} alt="Milky Moo" style={{ width: '50px' }}/>
        <h1>SERVIÇO FORA DO ESCOPO LINX - EXCLUSIVO MILKY MOO</h1>
        <img src={milkyMooImage} alt="Milky Moo" style={{ width: '50px' }}/>
      </div>
    </nav>
  );
}