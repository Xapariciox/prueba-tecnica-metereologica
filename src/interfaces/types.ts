export interface ForecastContextProps {
    setLocationUser: (location: string) => void;
    locationUser: string;
    forecastDays: any; 
    forecastHours: any; 
  }
export interface foreCastDaysItem {
    date: string;
    dateWithTimezone: string;
    freshSnow: number;
    snowHeight: number | null;
    weather: {
      state: number;
      text: string;
      icon: string;
    };
    prec: {
      sum: number;
      probability: number;
      sumAsRain: number | null;
      class: number;
    };
    sunHours: number;
    rainHours: number | null;
    temperature: {
      min: number;
      max: number;
      avg: number | null;
    };
    wind: {
      unit: string;
      direction: string;
      text: string;
      avg: number | null;
      min: number;
      max: number;
      gusts: {
        value: number;
        text: string | null;
      };
      significationWind: boolean;
    };
    windchill: {
      min: number;
      max: number;
      avg: number | null;
    };
    snowLine: {
      avg: number | null;
      min: number | null;
      max: number | null;
      unit: string;
    };
    astronomy: {
      dawn: string;
      sunrise: string;
      suntransit: string;
      sunset: string;
      dusk: string;
      moonrise: string;
      moontransit: string;
      moonset: string;
      moonphase: number;
      moonzodiac: number;
    }}

    export interface foreCastDaysItemMapped {
        date: string;
        state: number;
        temperature: {
          min: number;
          max: number;
        };
        weather: {
          text: string;
          icon: string;
        };
      }

      export interface HourlyForecastItem {
        date: string;
        period: number;
        freshSnow: number;
        weather: {
          state: number;
          text: string;
          icon: string;
        };
        sunHours: number | null;
        rainHours: number | null;
        prec: {
          sum: number;
          probability: number;
          sumAsRain: number | null;
          class: number;
        };
        temperature: {
          avg: number;
        };
        pressure: number;
        relativeHumidity: number;
        clouds: {
          high: number;
          low: number;
          middle: number;
        };
        wind: {
          unit: string;
          direction: string;
          text: string;
          avg: number | null;
          min: number | null;
          max: number | null;
          gusts: {
            value: number;
            text: string | null;
          };
          significationWind: boolean;
        };
        windchill: {
          avg: number | null;
          min: number | null;
          max: number | null;
        };
        snowLine: {
          avg: number | null;
          min: number | null;
          max: number | null;
          unit: string;
        };
        isNight: boolean;
      }
      