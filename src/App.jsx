import { useState } from 'react'
import Ads from './components/header/Ads/Ads'
import News from './components/header/News/News'
import Search from './components/main/Search/Search'
import Widgets from './components/footer/widgets/Widgets'
import Weather from './components/footer/widgets/Weather/Weather'
import TVProgram from './components/footer/widgets/TVProgram/TVProgram'
import Map from './components/footer/widgets/Map/Map'
import Popular from './components/footer/widgets/Popular/Popular'
import Broadcast from './components/footer/widgets/Broadcast/Broadcast'

import searchCategories from './data/searchCategories'
import newsCategories from './data/newsCategoties'
import newsNames from './data/newNames'
import TVPrograms from './data/TVPrograms'
import mapItems from './data/mapItems'
import favoritePages from './data/favoritePages'
import broadcast from './data/broadcast'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="App-header">
                <div className="App-wrapper">
                    <div className="App-header__main">
                        <News newsCategories={newsCategories} newsNames={newsNames} />
                    </div>

                    <Ads
                        title="Работа над ошибками"
                        description="Смотрите на Яндексе и запоминайте"
                    >
                    </Ads>
                </div>
      </header>
      <div className="App-main">
                <div className="App-wrapper">

                    <Search
                        searchCategories={searchCategories}
                        searchBarLabel="Яндекс"
                        searchBtnName="Найти"
                        searchAdvice="Найдётся всё. Например,"
                        searchExample="фаза луны сегодня"
                    />
                </div>
            </div>
            <footer className="App-footer">
                <div className="App-wrapper">

                    <Widgets>
                        <Weather
                            title="Погода"
                            averageTemperature="+17"
                            morningTemperature="+17"
                            daytimeTemperature="+20"
                        />
                        <Map
                            title="Карта Германии"
                            items={mapItems}
                        />
                        <Broadcast
                            title="Эфир"
                            items={broadcast}
                        />
                        <Popular
                            title="Посещаемое"
                            items={favoritePages}
                        />
                        <TVProgram
                            title="Телепрограмма"
                            items={TVPrograms}
                        />
                    </Widgets>

                </div>
            </footer>
    </>
  )
}

export default App
