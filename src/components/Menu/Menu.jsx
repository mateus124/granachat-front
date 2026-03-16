import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const MENU_COLLAPSED_STORAGE_KEY = 'granachat-menu-collapsed';

const Menu = () => {
    const [collapsed, setCollapsed] = useState(() => {
        const savedValue = localStorage.getItem(MENU_COLLAPSED_STORAGE_KEY);
        return savedValue === 'true';
    });

    useEffect(() => {
        localStorage.setItem(MENU_COLLAPSED_STORAGE_KEY, String(collapsed));
    }, [collapsed]);

    return (
        <div className={`${styles.menu} ${collapsed ? styles.collapsed : ''}`}>
            <button
                type="button"
                className={`${styles.close} ${collapsed ? styles.closeCollapsed : ''}`}
                onClick={() => setCollapsed((prev) => !prev)}
                aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
            >
                <FaArrowLeft size={22} />
            </button>
            <Logo compact={collapsed} />
            <nav className={styles.nav}>
                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                    <LuLayoutDashboard size={26}/>
                    <span className={styles.label}>Dashboard</span>
                </NavLink>
                <NavLink
                    to="/chat"
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                    <MdOutlineChat size={26}/>
                    <span className={styles.label}>Chat</span>
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                    <IoIosSettings size={26}/>
                    <span className={styles.label}>Settings</span>
                </NavLink>
            </nav>
            <div className={styles.profile}>
                <div className={styles.image}>
                    <img src="ace.avif" alt="Foto de perfil" />
                </div>
                <div className={styles.profileInfo}>
                    <p className={styles.profiletitle}>Ricardo Silva</p>
                    <p className={styles.profiledesc}>Freelancer</p>
                </div>
            </div>
        </div>
    )
}

export default Menu