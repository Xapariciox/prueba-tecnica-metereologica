import { useContext, useState } from 'react'
import { BsLightbulb, BsMoon } from 'react-icons/bs'
import { ForecastContext } from '../context/ForecastContext'
export const Switch = () => {
    const [isActive, setIsActive] = useState(false)
    const { setIsDarkMode } = useContext(ForecastContext)

    const toggleSwitch = () => {
        setIsActive(!isActive)
        setIsDarkMode(!isActive)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
                className={`switch ${isActive ? 'active' : 'inactive'}`}
                onClick={toggleSwitch}
            >
                <div className="slider"></div>
            </div>
            {isActive ? <BsMoon /> : <BsLightbulb />}
        </div>
    )
}
