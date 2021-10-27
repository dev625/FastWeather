import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import React from 'react'
const useStyles = makeStyles({
  text: {
    color: 'black',
    fontSize: '140%',
    textAlign: 'center',
  },
  content: {
    fontSize: '120%',
  },
})

const News = ({ news }) => {
  const classes = useStyles()
  const items = news.map((item) => (
    <Card
      variant='outlined'
      style={{
        marginTop: '5%',
        alignSelf: 'center',

        backgroundColor: '#abbab' /* fallback for old browsers */,
        backgroundImage: 'linear-gradient(to right, #abbaab, #ffffff)',
      }}
    >
      <CardContent className={classes.text}>
        <h3>{item.description}</h3>
        <a href={item.url}>{item.source.name}</a>
      </CardContent>
    </Card>
  ))
  return items
}

export default News
