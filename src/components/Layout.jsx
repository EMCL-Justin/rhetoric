import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('rh_theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('rh_theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div id="app">
      <div className="header">
        <div className="header-wordmark">Rhetoric</div>
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
      <nav className="tabs">
        <NavLink to="/" end className={({ isActive }) => `tab${isActive ? ' active' : ''}`}>Daily</NavLink>
        <NavLink to="/study"   className={({ isActive }) => `tab${isActive ? ' active' : ''}`}>Study</NavLink>
        <NavLink to="/library" className={({ isActive }) => `tab${isActive ? ' active' : ''}`}>Library</NavLink>
      </nav>
      <div className="tab-line" />
      <div className="view-container">
        {children}
      </div>
    </div>
  )
}
