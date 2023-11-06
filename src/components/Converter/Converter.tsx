import { useAppDispatch, useAppSelector } from "../../reducer/store";
import { changeCurrencyFrom, changeCurrencyTo, changeResultConver } from "../../reducer/appSlice";
import { requestCurrecyConvert } from "../../requestAPI";
import s from "./Converter.module.scss";
import { ChangeEvent, useState } from "react";
import { Loader } from "..";

export const Converter = () => {
    const { allCurrencyKey, allCurrencyName } = useAppSelector((state) => state.appSlice);
    const { currencyTo, currencyFrom, resultConvert } = useAppSelector((state) => state.appSlice);
    const [currency, setCurrency] = useState(0);
    const [loader, setLoader] = useState(false);
    const dispatch = useAppDispatch();

    const changeCurrency = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLoader(true);
        if (+e.target.value > 0) {
            setCurrency(+e.target.value);

            const result = await requestCurrecyConvert(+e.target.value, currencyTo, currencyFrom);
            dispatch(changeResultConver(result.result));
        }
        setLoader(false);
    };

    const selectCurrencyTo = async (e: ChangeEvent<HTMLSelectElement>) => {
        setLoader(true);
        if (e.target.value !== currencyTo) {
            const result = await requestCurrecyConvert(currency, e.target.value, currencyFrom);
            dispatch(changeResultConver(result.result));
        }
        setLoader(false);

        dispatch(changeCurrencyTo(e.target.value));
    };
    const selectCurrencyFrom = async (e: ChangeEvent<HTMLSelectElement>) => {
        setLoader(true);

        if (e.target.value !== currencyTo) {
            const result = await requestCurrecyConvert(currency, currencyTo, e.target.value);
            dispatch(changeResultConver(result.result));
        }
        setLoader(false);

        dispatch(changeCurrencyFrom(e.target.value));
    };

    const reverseCurrency = async () => {
        setLoader(true);
        setCurrency(+resultConvert);
        const to = currencyTo;
        const from = currencyFrom;
        dispatch(changeResultConver(currency));
        dispatch(changeCurrencyTo(from));
        dispatch(changeCurrencyFrom(to));
        setLoader(false);
    };
    return (
        <>
            <div className={s.container}>
                <div className={s.block}>
                    <p className={s.text}>E меня есть:</p>
                    <input className={s.input} type="number" value={currency} onChange={changeCurrency} placeholder="введите число..." />

                    <select className={s.select} onChange={selectCurrencyTo}>
                        {allCurrencyKey.map((el: string, index: number) => {
                            return (
                                <option selected={currencyTo === el ? true : false} key={index} value={el}>
                                    {el} {allCurrencyName[index]}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={s.box}>
                    <button disabled={loader ? true : false} onClick={reverseCurrency}>
                        {loader ? <Loader /> : <img className={s.image} src="swap.png" alt="reverse" />}
                    </button>
                </div>

                <div className={s.block}>
                    <p className={s.text}>Хочу купить:</p>

                    <p className={s.result}>
                        {resultConvert} {resultConvert > 0 && currencyFrom}
                    </p>
                    <select className={s.select} onChange={selectCurrencyFrom}>
                        {allCurrencyKey.map((el: string, index: number) => {
                            return (
                                <option selected={currencyFrom === el ? true : false} key={index} value={el}>
                                    {el} {allCurrencyName[index]}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </>
    );
};
