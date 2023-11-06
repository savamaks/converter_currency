import s from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={s.ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
