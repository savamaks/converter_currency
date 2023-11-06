import { useEffect, useState } from "react";
import s from "./App.module.scss";
import { requestAllCur } from "./requestAPI";
import { useAppDispatch} from "./reducer/store";
import { addCurenncyKey, addCurenncyName, changeCurrencyFrom, changeCurrencyTo, changeLoad, changeResultConver } from "./reducer/appSlice";
import { Converter, Loader } from "./components";

function App() {
    const [flag, setFlag] = useState(false);
    const dispatch = useAppDispatch();

    const loadNameCurrency = async () => {
        const result = await requestAllCur();
        if (result.success) {
            dispatch(addCurenncyKey(Object.keys(result.symbols)));
            dispatch(addCurenncyName(Object.values(result.symbols)));
            setFlag(true);
        }
    };
    useEffect(() => {
        dispatch(changeLoad("loading"));
        dispatch(changeCurrencyTo("RUB"));
        dispatch(changeCurrencyFrom("USD"));
        dispatch(changeResultConver(""));

        loadNameCurrency();
    }, []);

    return (
        <div className={s.main}>
            <h2>Конвертер Валют</h2>
            {flag ? <Converter /> : <Loader />}
        </div>
    );
}

export default App;
