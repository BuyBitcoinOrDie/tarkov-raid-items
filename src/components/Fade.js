import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { createUseStyles, useTheme } from 'hooks'

const createFadeStyles = (transitionDuration) => ({
  '&-appear': {
    opacity: 0,
  },
  '&-appear-active': {
    opacity: 1,
    transitionDuration,
    transitionProperty: 'opacity',
    transitionTimingFunction: 'linear',
  },
  '&-enter': {
    opacity: 0,
  },
  '&-enter-active': {
    opacity: 1,
    transitionDuration,
    transitionProperty: 'opacity',
    transitionTimingFunction: 'linear',
  },
  '&-exit': {
    opacity: 1,
  },
  '&-exit-active': {
    opacity: 0,
    transitionDuration,
    transitionProperty: 'opacity',
    transitionTimingFunction: 'linear',
  },
})

const useStyles = createUseStyles((theme) => ({
  default: createFadeStyles(theme.animation.duration.default),
  fast: createFadeStyles(theme.animation.duration.fast),
  slow: createFadeStyles(theme.animation.duration.slow),
}))

export default ({ duration = 'default', ...rest }) => {
  const classes = useStyles()
  const theme = useTheme()
  const timeout = theme.animation.duration[duration]
  return (
    <CSSTransition
      {...rest}
      mountOnEnter
      unmountOnExit
      timeout={timeout}
      classNames={classes[duration]}
    />
  )
}
