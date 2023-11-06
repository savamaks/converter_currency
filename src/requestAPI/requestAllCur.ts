
export const requestAllCur = async() => {
    try {
        const res = await fetch(`https://api.apilayer.com/exchangerates_data/symbols`,{
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

    