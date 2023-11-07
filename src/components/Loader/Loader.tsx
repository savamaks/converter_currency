import { FC } from 'react';
import s from './Loader.module.scss'

export const Loader:FC = () => {
    return (
        <div className={s.ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
