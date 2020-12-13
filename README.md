# Future-Oriented Progressive Web App (REACT)

## STEP 1. Create App & Axios - Weather Data
1. Configure the overall app layout

2. Open API - Weather Data
  - fetchWeather = **async** (query)
  - **await** axios.get(URL, { structured data })
    + URL = OPEN API
    + API_KEY


## STEP 2. Get Weather's Data 
 1. State => query, weather (REACT Hook)
 2. search = **async** => **await** fetchWeather
  - setWeather(data) & SetQuery('') => ReSet
 3. Logic ?  weather.main && Weather's Card 
  - City's name
  - Temp => <sup>&deg;C</sup>
  - Img => Icon
  - description
  