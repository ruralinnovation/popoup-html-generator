import React from 'react'

export const Emoji = ({ symbol, label = '', fontSize = null }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label}
    aria-hidden={label ? 'false' : 'true'}
    style={{ fontSize: fontSize }}
  >
    {symbol}
  </span>
)
