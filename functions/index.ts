const logWeather = (forecast: { date: Date, weather: string, temperature: number }): void => {
  console.log(forecast.date);
  console.log(forecast.weather)
  console.log(forecast.temperature)
}

// ES2015
const logWeatherES = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

const todaysWeather: { date: Date, weather: string, temperature: number } = {
  date: new Date(),
  weather: 'sunny',
  temperature: 40
}

async function getName(): Promise<string> {
  return new Promise((res, rej) => res("Hasa"))
}

logWeather(todaysWeather)
getName().then(data => console.log(data))