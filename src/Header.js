import './Header.css';
import logo_text from './logo_text.png';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
          <img src={logo_text}/>
      </div> 
      <div className="header-center">
        <div>Cine suntem</div>
        <div>Istoria noastră</div>
        <div>Galeria de produse</div>
        <div>De ce să ne alegi</div>
      </div>
      <div className="header-right">
        <button>Contactează-ne</button>
      </div>
    </div>
  );
}

export default Header;
