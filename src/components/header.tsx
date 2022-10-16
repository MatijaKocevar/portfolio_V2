import React, { useState } from 'react'
import './styles/header.scss'
import TextTransition, { presets } from 'react-text-transition'

const TEXTS = ['Creative', 'Hard working', 'Positive']

const Header = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1 className="heading">portfolio</h1>
        <TextTransition className="text-transition" springConfig={presets.slow}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </div>
    </div>
  )
}

export default Header
