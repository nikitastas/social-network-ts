import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} style={({isActive}) =>({color: isActive ? "gold" : ""})}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} style={({isActive}) =>({color: isActive ? "gold" : ""})}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} style={({isActive}) =>({color: isActive ? "gold" : ""})}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} style={({isActive}) =>({color: isActive ? "gold" : ""})}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} style={({isActive}) =>({color: isActive ? "gold" : ""})}>Settings</NavLink>
            </div>
        </nav>
    )
}