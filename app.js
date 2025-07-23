const BASR_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "b32806747e7d4a7d7689a1f37cef306f" ; 

const searchInput = document.querySelector("input") ; 
const searchButton = document.querySelector("button") ; 


const getCurrentWeatherByName =  async (city) => { 
    const url =`${BASR_URL}/weather?q=${city}&appid=${API_KEY}&units=metric` ; 
    const response = await fetch(url) ; 
    const json = await response.json(); 
    return json ; 
} 

const searchHandler = async () => { 
    const cityName = searchInput.value ; 
    if(!cityName) { 
        alert("Please enter city name!") ; 
        return ; 
    }
  const currentData =  await getCurrentWeatherByName(cityName) ;
  console.log(currentData) ; 

}





searchButton.addEventListener("click" , searchHandler)