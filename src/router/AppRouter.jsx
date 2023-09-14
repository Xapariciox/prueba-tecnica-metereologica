import { Home } from '../pages/home/Home'
import { Layout } from '../components/layout/Layout'
import { Route, Switch } from 'wouter'
import { ForecastTwentyFour } from '../pages/forecastTwentyFour/ForecastTwentyFour'
import { ForecastWeek } from '../pages/forecastWeek/ForecastWeek'

export const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/forecast-next-day">
          <Layout>
            <ForecastTwentyFour />
          </Layout>
        </Route>
        <Route path="/forecast-next-week">
          <Layout>
            <ForecastWeek />
          </Layout>
        </Route>
        <Route>
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </>
  )
}
