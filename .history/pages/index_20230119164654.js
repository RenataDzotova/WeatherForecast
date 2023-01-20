import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'
import { FlexBox, Wrapper, Text, ImgPlaceholder } from '../styles/global'

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState('')
  const [showTitle, setShowTitle] = useState('Weather App')
  const [showDesc, setShowDesc] = useState('Accurate weather forecasts. Wherever.')

  const searchLocation = (event) => {
    if (event.key === "Enter"){
      axios.get(url)
      .then((response) => {
        console.clear()
        setData(response.data)
        console.log(response.data)
        setWeather(response.data.weather)
        setErrorMessage("")
        setShowTitle("")
        setShowDesc("")
      }) .catch(err => {
        console.log(err)
        setErrorMessage("Please enter another location")
        setData({})
        setWeather()
      })
      setLocation('')
    }
  }

  var apiKey = "f1c3aba9f416efdb16702d2866709e98";
  var lang = "en";
  var units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`

  return (
    <div className={styles.bg}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
            />
      </Head>

      <main>
        

        {
          data && 
            <span>
              {errorMessage}
              <span className='titleText'>
              {showTitle}
              </span>
              <span className='descText'>
              {showDesc}
              </span>
            </span>
        }
        
        
        <input className='inputStyle'
          value = {location}
          onChange={event=> setLocation(event.target.value)}
          placeholder="Enter location"
          onKeyDown={searchLocation}
          type="text"
          style={{position:"absolute", top:"130px", left:"40%" }}
        >
        </input>

        {
          weather && weather.map((w, index) =>{
            return(
              <Wrapper bgImage={ data.main.temp.toFixed() < 0 && w.main=="Snow" ? "/alora-griffiths-HlnFco4i624-unsplash.jpg" : w.main=="Rain" || w.main=="Thunderstorm" ? "/nick-nice-ve-R7PCjJDk-unsplash.jpg" : w.main=="Clouds" ? "/johny-goerend-z_SXPzTMKkc-unsplash.jpg" : "/kenrick-mills-MF9Wy1NA55I-unsplash-2.jpg"} key={index}>

                  <FlexBox dir="column" width="100%" height="100%">
                    <FlexBox dir="column" margin="200px 0 0 0">
                      <Text color="white" fontSize="65px" fontWeight="bold">{data.name}</Text>
                        <FlexBox alignItems="flex-start">
                          <Text color="white" fontSize="90px" fontWeight="bold">{data.main.temp.toFixed()}°</Text>
                          <FlexBox margin="15px 0 12px 10px"><Text color="white" fontSize="30px">{w.main} </Text></FlexBox>
                        </FlexBox>
                    </FlexBox>

                    <FlexBox flexWrap="wrap" margin="100px 0 0 0" bgColor="rgba(227, 227, 227, 0.25)" border="rgba(227, 227, 227) solid 2px" minHeight="130px" width="60%" borderRadius="30px" justifyContent="space-around" padding="0 20px 0 20px">
                      <FlexBox dir="column">
                        <Text color="white" fontSize="65px" fontWeight="700">{data.main.feels_like.toFixed()}°C</Text> 
                        <Text color="white">Feels like</Text>
                      </FlexBox>
                      <FlexBox dir="column">
                        <Text color="white" fontSize="65px" fontWeight="700">{data.main.humidity}%</Text> 
                        <Text color="white">Humidity</Text>
                      </FlexBox>
                      <FlexBox dir="column">
                        <FlexBox>
                          <Text color="white" fontSize="65px" fontWeight="700">{data.main.pressure}</Text>
                          <Text fontSize="20px" margin="0 0 15px 0" color="white">hPa</Text>
                        </FlexBox>
                        <Text color="white">Pressure</Text>
                      </FlexBox>
                      { data.wind.gust &&
                      <FlexBox dir="column">
                        <FlexBox>
                          <Text color="white" fontSize="65px" fontWeight="700">{data.wind.gust}</Text>
                          <Text fontSize="20px" margin="0 0 15px 0" color="white">M/s</Text>
                        </FlexBox>
                        <Text color="white">Wind</Text>
                      </FlexBox>
                      }
                    </FlexBox>
                  </FlexBox>
              </Wrapper>
            )
          })
        }
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
