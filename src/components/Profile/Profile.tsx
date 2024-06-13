import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}