import './App.css'
import Header from './components/Header.js'
import WeatherCard from './components/WeatherCard'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  InputLabel,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core'
import News from './components/News'

const { apikey, newskey } = require('./api/keys')

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '5%',
  },
})

function App() {
  const [loc, setLoc] = useState('')
  const [locfromsubmit, setLocfromsubmit] = useState('Mumbai')
  const [err1, setErr1] = useState(false)
  const [weather, setWeather] = useState({})
  const [submit, setSubmit] = useState(false)
  const [news, setNews] = useState([])
  const classes = useStyles()

  const handleSubmit2 = (e) => {
    e.preventDefault()
    setLocfromsubmit(loc)
  }

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${locfromsubmit}&aqi=yes`
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setWeather(res.data)
        setErr1(false)
        setSubmit(true)
      })
      .catch((err) => {
        // console.log(err);
        setErr1(true)
        setSubmit(true)
      })
    const url2 = `https://newsapi.org/v2/everything?q=${locfromsubmit}&from=2021-10-27&sortBy=popularity&apiKey=${newskey}`
    axios
      .get(url2)
      .then((res) => {
        console.log(res.data)
        setNews(res.data.articles)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [locfromsubmit])

  return (
    <Container>
      <Header />
      <Container align='center'>
        <form onSubmit={handleSubmit2}>
          <InputLabel>Please Enter Your Location. </InputLabel>
          <TextField
            htmlFor='location'
            type='string'
            id='location'
            name='location'
            value={loc}
            margin='normal'
            fullWidth
            required='true'
            onChange={(e) => {
              setLoc(e.target.value)
            }}
          ></TextField>
          <Button className={classes.root} type='submit' size='large'>
            Submit
          </Button>
        </form>
      </Container>

      <Container>
        {submit === true ? <WeatherCard weather={weather} err1={err1} /> : ''}
      </Container>

      <Container>
        {submit === true && err1 === false ? (
          <News news={news}>show news now</News>
        ) : (
          <></>
        )}
      </Container>
    </Container>
  )
}

export default App
