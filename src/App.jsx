import { useState } from 'react'
import './App.css'

const defaultSettings = {
  theme: 'dark',
  language: 'en',
  notifications: true,
  autoSave: true,
  compactView: false,
}

function App() {
  const [settings, setSettings] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultSettings
    }

    const savedSettings = window.localStorage.getItem('settings-form')
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target

    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setSaved(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.localStorage.setItem('settings-form', JSON.stringify(settings))
    setSaved(true)
  }

  const handleReset = () => {
    setSettings(defaultSettings)
    setSaved(false)
    window.localStorage.removeItem('settings-form')
  }

  return (
    <main className="app-shell">
      <section className="settings-card">
        <p className="eyebrow">Preferences</p>
        <h1>Application Settings</h1>
        <p className="description">
          Fine-tune the way your workspace feels and behaves.
        </p>

        <form className="settings-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Theme</span>
            <select name="theme" value={settings.theme} onChange={handleChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </label>

          <label className="field">
            <span>Language</span>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            <span>Enable notifications</span>
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              name="autoSave"
              checked={settings.autoSave}
              onChange={handleChange}
            />
            <span>Auto-save changes</span>
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              name="compactView"
              checked={settings.compactView}
              onChange={handleChange}
            />
            <span>Use compact layout</span>
          </label>

          <div className="actions">
            <button type="submit" className="btn btn-primary">
              Save settings
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>

          {saved && <p className="success">Settings saved successfully.</p>}
        </form>
      </section>
    </main>
  )
}

export default App
