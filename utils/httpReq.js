import { showModal } from "./modal.js";

const BASR_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "b32806747e7d4a7d7689a1f37cef306f" ; 

const getWeatherData = async (type , data) => { 
    let url = null ; 

    switch(type) { 
        case "current": 
            if(typeof data === "string") { 
                url = `${BASR_URL}/weather?q=${data}&appid=${API_KEY}&units=metric` ; 
            }
            else { 
              url = `${BASR_URL}/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric` ; 
            }

            break ;
        
        case "forecast":
            if(typeof data === "string") { 
                url = `${BASR_URL}/forecast?q=${data}&appid=${API_KEY}&units=metric` ; 
            }
            else { 
              url = `${BASR_URL}/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric` ; 
            }

            break ;

        default:
            url = `${BASR_URL}/weather?q=urmia&appid=${API_KEY}&units=metric` ;
            break ;  
    }
    try { 
    const response = await fetch(url) ; 
    const json = await response.json() ; 
    if (+json.cod === 200) { 
        return json ; 
    }
    else { 
        showModal(json.message) ; 
    }
    }
    catch (error) { 
        showModal("An error occured when fetching data") ; 
    } 
}

export default getWeatherData ; 
