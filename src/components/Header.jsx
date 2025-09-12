import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useAuth } from "../context/AuthContext";
import infoIcon from '../assets/Info.png';
import SalirIcon from '../assets/Salir.png';

// --- Componente de Selector de Idioma Reutilizable ---
// Para no repetir código, creamos un pequeño componente para las banderas
const LanguageSwitcher = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className={`language-selector ${isMobile ? 'mobile' : 'desktop'}`}>
      <button
        onClick={() => changeLanguage('es')}
        className={`lang-button ${i18n.language === 'es' ? 'active' : ''}`}
        title="Español"
      >
        <img src="https://flagcdn.com/w20/es.png" alt="Español" className="flag-icon" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline'; }} />
        <span className="flag-fallback" style={{ display: 'none' }}>ES</span>
      </button>
      <span className="lang-separator">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`lang-button ${i18n.language === 'en' ? 'active' : ''}`}
        title="English"
      >
        <img src="https://flagcdn.com/w20/us.png" alt="English" className="flag-icon" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline'; }} />
        <span className="flag-fallback" style={{ display: 'none' }}>EN</span>
      </button>
    </div>
  );
};

// Componente Dropdown (sin cambios)
const SimpleDropdown = ({ items, onItemSelected }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    onItemSelected(item);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <button onClick={handleToggle} className="dropdown-button">
        <span className="user-icon">🤴🏽</span>
        <span className="dropdown-text">{t('header.my_account')}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleItemClick(item)} className="dropdown-item">
                <span className="dropdown-icon">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Componente Principal del Header
function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { isAuthenticated: isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  const dropdownItems = [
    { id: "perfil", name: t('header.my_profile'), icon: "🤴🏽", url: "/player" },
    { id: "cerrar", name: t('header.logout'), icon: <img src={SalirIcon} alt={t('header.logout')} className="nav-icon" /> },
  ];

  const handleDropdownSelect = (item) => {
    setIsMobileMenuOpen(false);
    if (item.url) navigate(item.url);
    if (item.id === "cerrar") handleLogout();
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link-wrapper" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/Logo_1.jpg" alt="Gods of Eternia Logo" className="game-logo" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/8b5a2b/FFFFFF?text=GOE&font=roboto'; }}/>
            <h1 className="game-title">Gods of Eternia</h1>
          </Link>
        </div>

        {/* El contenedor 'header-right' nos ayuda a alinear todo a la derecha en desktop */}
        <div className="header-right">
          <nav className={`nav ${isMobileMenuOpen ? "nav-active" : ""}`}>
            {/* Menú para Escritorio */}
            <ul className="desktop-nav">
              {isLoggedIn ? (
                <>
                  <li><Link to="/" className="nav-link">{t('header.home')}</Link></li>
                  <li><Link to="/about" className="nav-link"><img src={infoIcon} alt={t('header.about')} className="nav-icon" /> {t('header.about')}</Link></li>
                  <li><SimpleDropdown items={dropdownItems} onItemSelected={handleDropdownSelect} /></li>
                </>
              ) : (
                <>
                  <li><Link to="/login" className="nav-link">🔑 {t('header.login')}</Link></li>
                  <li><Link to="/register" className="nav-link">📜 {t('header.register')}</Link></li>
                </>
              )}
            </ul>

            {/* Menú para Móvil */}
            <ul className="mobile-nav">
              {isLoggedIn ? (
                <>
                  <li><Link to="/" className="nav-link" onClick={toggleMobileMenu}>🏰 {t('header.home')}</Link></li>
                  <li><Link to="/about" className="nav-link" onClick={toggleMobileMenu}><img src={infoIcon} alt={t('header.about')} className="nav-icon" /> {t('header.about')}</Link></li>
                  {dropdownItems.map(item => (
                    <li key={item.id}>
                      <Link to={item.url || '#'} className="nav-link" onClick={() => handleDropdownSelect(item)}>
                        <span className="dropdown-icon">{item.icon}</span> {item.name}
                      </Link>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  <li><Link to="/login" className="nav-link" onClick={toggleMobileMenu}>🔑 {t('header.login')}</Link></li>
                  <li><Link to="/register" className="nav-link" onClick={toggleMobileMenu}>📜 {t('header.register')}</Link></li>
                </>
              )}
              <li className="mobile-lang-list-item">
                <LanguageSwitcher isMobile={true} />
              </li>
            </ul>
          </nav>
          <LanguageSwitcher isMobile={false} />
        </div>

        <button className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;