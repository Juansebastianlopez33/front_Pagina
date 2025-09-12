import { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'; // Importar hook
import "./Dropdown.css"; 

const MenuButton = ({ name, icon, onClick, hasSubItems, className }) => {
  return (
    <button className={`menu-button ${className || ""}`} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      <span className="name">{name}</span>
      {hasSubItems && <span className="chevron">{"\u276F"}</span>}
    </button>
  );
};

const MenuItem = ({
  item,
  onItemClick,
  activeSubMenu,
  onToggleSubMenu,
  parentMenuName,
}) => {
  const subMenuRef = useRef(null);
  const [subMenuHeight, setSubMenuHeight] = useState(0);

  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isActive = activeSubMenu === item.id;

  useEffect(() => {
    if (subMenuRef.current) {
      setSubMenuHeight(subMenuRef.current.scrollHeight);
    }
  }, [item.subItems, isActive]);

  const handleButtonClick = () => {
    if (hasSubItems) {
      onToggleSubMenu(item.id, subMenuRef.current?.scrollHeight || 0);
    } else if (onItemClick) {
      onItemClick(item);
    }
  };

  const handleBackClick = () => {
    onToggleSubMenu(null, 0);
  };

  return (
    <>
      <MenuButton
        onClick={handleButtonClick}
        name={item.name}
        icon={item.icon}
        hasSubItems={hasSubItems}
      />
      {hasSubItems && (
        <div
          ref={subMenuRef}
          className={`sub-menu ${isActive ? "open" : ""}`}
          style={{ height: isActive ? `${subMenuHeight}px` : "0px" }}
        >
          <MenuButton
            onClick={handleBackClick}
            icon={"\u2B05"}
            name={parentMenuName || item.name}
            className="back-button"
          />
          {item.subItems.map((subItem) => (
            <MenuButton
              key={subItem.id || subItem.name}
              name={subItem.name}
              icon={subItem.icon}
              onClick={() => {
                if (onItemClick) onItemClick(subItem);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export const Dropdown = ({ items, onItemSelected }) => {
  const { t } = useTranslation(); // Inicializar hook
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [currentSubMenuHeight, setCurrentSubMenuHeight] = useState(0);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveSubMenu(null);
      setCurrentSubMenuHeight(0);
    }
  };

  const handleToggleSubMenu = (itemId, height) => {
    if (activeSubMenu === itemId) {
      setActiveSubMenu(null);
      setCurrentSubMenuHeight(0);
    } else {
      setActiveSubMenu(itemId);
      setCurrentSubMenuHeight(height);
    }
  };

  const handleItemClick = (item) => {
    if (onItemSelected) {
      onItemSelected(item);
    }
    setIsOpen(false);
    setActiveSubMenu(null);
    setCurrentSubMenuHeight(0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSubMenu(null);
        setCurrentSubMenuHeight(0);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button onClick={handleToggleDropdown} className="dropdown-toggle-button">
        {t('dropdown.profile_menu')} {/* Texto traducido */}
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </button>
      {isOpen && (
        <div
          className="dropdown-menu"
          style={{
            height: activeSubMenu
              ? `${currentSubMenuHeight + 60}px` 
              : "auto", 
          }}
        >
          {!activeSubMenu &&
            items.map((item) => (
              <MenuItem
                key={item.id || item.name}
                item={item}
                onItemClick={handleItemClick}
                activeSubMenu={activeSubMenu}
                onToggleSubMenu={handleToggleSubMenu} 
              />
            ))}
          {activeSubMenu &&
            items
              .filter((item) => item.id === activeSubMenu)
              .map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onItemClick={handleItemClick}
                  activeSubMenu={activeSubMenu}
                  onToggleSubMenu={handleToggleSubMenu}
                  parentMenuName={t('dropdown.back_to_main')} 
                />
              ))}
        </div>
      )}
    </div>
  );
};