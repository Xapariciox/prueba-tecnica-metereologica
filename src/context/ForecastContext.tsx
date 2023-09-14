import { createContext } from 'react'



export const ForecastContext = createContext({
  setLocationUser: (location: string) => {},
  locationUser: '', 
});
