export default function getBackground(weather) {
  if (!weather) return "default-bg";

  const type = weather.weather[0].main;

  switch (type) {
    case "Clear":
      return "sunny-bg";

    case "Clouds":
      return "cloudy-bg";

    case "Rain":
    case "Drizzle":
      return "rainy-bg";

    case "Thunderstorm":
      return "storm-bg";

    case "Snow":
      return "snow-bg";

    default:
      return "default-bg";
  }
}