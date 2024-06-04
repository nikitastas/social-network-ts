import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src="https://s13.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/01/kadr-iz-filma-avatar-put-vody.jpg"
                    alt=""/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;