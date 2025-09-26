import { useRef, useState, useEffect } from "react";
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'; // Importar hook
=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
import "./Dropdown.css"; 

const MenuButton = ({ name, icon, onClick, hasSubItems, className }) => {
  return (
    <button className={`menu-button ${className || ""}`} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      <span className="name">{name}</span>
<<<<<<< HEAD
      {hasSubItems && <span className="chevron">{"\u276F"}</span>}
=======
      {hasSubItems && <span className="chevron">{"\u276F"}</span>}{" "}
      {/* Chevron right */}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
    if (subMenuRef.current) {
      setSubMenuHeight(subMenuRef.current.scrollHeight);
    }
  }, [item.subItems, isActive]);

  const handleButtonClick = () => {
    if (hasSubItems) {
      onToggleSubMenu(item.id, subMenuRef.current?.scrollHeight || 0);
    } else if (onItemClick) {
      onItemClick(item);
=======
    // Calcula la altura del submenú cuando se abre o sus items cambian
    if (subMenuRef.current) {
      setSubMenuHeight(subMenuRef.current.scrollHeight);
    }
  }, [item.subItems, isActive]); // Recalcular si los subitems cambian o el menú se activa/desactiva

  const handleButtonClick = () => {
    if (hasSubItems) {
      // Pasa el ID del submenú y su altura para la animación del contenedor principal
      onToggleSubMenu(item.id, subMenuRef.current?.scrollHeight || 0);
    } else if (onItemClick) {
      onItemClick(item); // Llama al manejador de clic del ítem principal
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    }
  };

  const handleBackClick = () => {
<<<<<<< HEAD
    onToggleSubMenu(null, 0);
=======
    onToggleSubMenu(null, 0); // Cierra el submenú actual, volviendo al menú principal
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
          style={{ height: isActive ? `${subMenuHeight}px` : "0px" }}
        >
          <MenuButton
            onClick={handleBackClick}
            icon={"\u2B05"}
            name={parentMenuName || item.name}
=======
          // La altura se anima para el efecto de slide
          style={{ height: isActive ? `${subMenuHeight}px` : "0px" }}
        >
          {/* Botón para volver al menú principal */}
          <MenuButton
            onClick={handleBackClick}
            icon={"\u2B05"} // Flecha hacia atrás
            name={parentMenuName || item.name} // Muestra el nombre del menú padre o el actual
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            className="back-button"
          />
          {item.subItems.map((subItem) => (
            <MenuButton
<<<<<<< HEAD
              key={subItem.id || subItem.name}
              name={subItem.name}
              icon={subItem.icon}
              onClick={() => {
                if (onItemClick) onItemClick(subItem);
=======
              key={subItem.id || subItem.name} // Usar un id único si está disponible
              name={subItem.name}
              icon={subItem.icon}
              onClick={() => {
                if (onItemClick) onItemClick(subItem); // Llama al manejador de clic para sub-items
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export const Dropdown = ({ items, onItemSelected }) => {
<<<<<<< HEAD
  const { t } = useTranslation(); // Inicializar hook
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [currentSubMenuHeight, setCurrentSubMenuHeight] = useState(0);
  const dropdownRef = useRef(null);
=======
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // ID del submenú activo
  const [currentSubMenuHeight, setCurrentSubMenuHeight] = useState(0); // Altura del submenú activo
  const dropdownRef = useRef(null); // Referencia al contenedor del dropdown para detectar clics fuera
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
<<<<<<< HEAD
=======
      // Si se está cerrando el dropdown principal, también cierra cualquier submenú abierto
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
      setActiveSubMenu(null);
      setCurrentSubMenuHeight(0);
    }
  };

  const handleToggleSubMenu = (itemId, height) => {
    if (activeSubMenu === itemId) {
<<<<<<< HEAD
=======
      // Si se hace clic en el mismo submenú, se cierra
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
      setActiveSubMenu(null);
      setCurrentSubMenuHeight(0);
    } else {
      setActiveSubMenu(itemId);
      setCurrentSubMenuHeight(height);
    }
  };

  const handleItemClick = (item) => {
    if (onItemSelected) {
<<<<<<< HEAD
      onItemSelected(item);
    }
=======
      onItemSelected(item); // Llama a la función pasada desde el componente padre (Header)
    }
    // Cierra el dropdown y cualquier submenú después de seleccionar un item
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    setIsOpen(false);
    setActiveSubMenu(null);
    setCurrentSubMenuHeight(0);
  };

<<<<<<< HEAD
=======
  // Efecto para cerrar el dropdown si se hace clic fuera de él
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
        {t('dropdown.profile_menu')} {/* Texto traducido */}
=======
        Menú Perfil {/* Puedes cambiar este texto o usar un ícono, como un avatar */}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
=======
          {/* Muestra el submenú activo si lo hay */}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
          {activeSubMenu &&
            items
              .filter((item) => item.id === activeSubMenu)
              .map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onItemClick={handleItemClick}
<<<<<<< HEAD
                  activeSubMenu={activeSubMenu}
                  onToggleSubMenu={handleToggleSubMenu}
                  parentMenuName={t('dropdown.back_to_main')} 
=======
                  activeSubMenu={activeSubMenu} // Propagado para MenuItem
                  onToggleSubMenu={handleToggleSubMenu} // Propagado para MenuItem
                  parentMenuName="Principal" // Texto para el botón "back" del submenú
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                />
              ))}
        </div>
      )}
    </div>
  );
};