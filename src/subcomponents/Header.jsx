import React from 'react'

export default function Header() {
  return (
    <div className='site__header'>
        <a href="/" className="logo__link">
            <img
            src="/assets/Logo.svg"
            alt="Little Lemon's company logo, plus name-text."
            className='logo__link__image'
            />
        </a>
    </div>
  )
}
