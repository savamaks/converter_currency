
export const requestCurrecyConvert = async(value:string,currencyTo:string,currencyFrom:string) => {
try {
    const res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${value}`,{
    method:'GET',
    headers:{
        "Content-Type": "application/json",
        "apikey": "HP0RRx3nssk90MU3h3FMCyQmGuGMHDlT",
        }
    })
    const data = await res.json()
    return data
} catch (error) {
    console.log(error);
}
};
