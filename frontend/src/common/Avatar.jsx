import React from 'react'
import { BASE_API_URL } from '../util/fetch'

export const renderImage = img => {
  if (img && img.includes('http')) {
    return img
  } else if (img) {
    return `${BASE_API_URL}/${img}`
  } else {
    return '/images/profile-2.png'
  }
}
function Avatar({
  img,
  style,
  className = 'avatar ml-auto mr-auto mb-0 mt-2 w100',
}) {
  return (
    <figure className={className}>
      <img
        style={style}
        src={renderImage(img)}
        alt="t-1.jpg"
        className="rounded-lg w-100"
      />
    </figure>
  )
}

export default Avatar
