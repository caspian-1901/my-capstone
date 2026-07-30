import { useState } from 'react'
import './SettingsForm.css'

interface Settings {
  theme: 'light' | 'dark' | 'auto'
  language: 'en' | 'es' | 'fr'
  notifications: boolean
  autoSave: boolean
  fontSize: 'small' | 'medium' | 'large'
}

export function SettingsForm() {
  const [settings, setSettings] = useState<Settings>({
    theme: 'auto',
    language: 'en',
    notifications: true,
    autoSave: true,
    fontSize: 'medium',
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (key: keyof Settings, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
    setSaved(false)
  }

  const handleSave = () => {
    localStorage.setItem('appSettings', JSON.stringify(settings))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    setSettings({
      theme: 'auto',
      language: 'en',
      notifications: true,
      autoSave: true,
      fontSize: 'medium',
    })
    setSaved(false)
  }

  return (
    <div className="settings-form">
      <h2>Settings</h2>

      <div className="settings-group">
        <label htmlFor="theme">
          <span>Theme</span>
          <select
            id="theme"
            value={settings.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </label>
      </div>

      <div className="settings-group">
        <label htmlFor="language">
          <span>Language</span>
          <select
            id="language"
            value={settings.language}
            onChange={(e) => handleChange('language', e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </label>
      </div>

      <div className="settings-group">
        <label htmlFor="fontSize">
          <span>Font Size</span>
          <select
            id="fontSize"
            value={settings.fontSize}
            onChange={(e) => handleChange('fontSize', e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>

      <div className="settings-group checkbox">
        <label htmlFor="notifications">
          <input
            id="notifications"
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => handleChange('notifications', e.target.checked)}
          />
          <span>Enable notifications</span>
        </label>
      </div>

      <div className="settings-group checkbox">
        <label htmlFor="autoSave">
          <input
            id="autoSave"
            type="checkbox"
            checked={settings.autoSave}
            onChange={(e) => handleChange('autoSave', e.target.checked)}
          />
          <span>Auto-save changes</span>
        </label>
      </div>

      <div className="settings-actions">
        <button className="btn btn-primary" onClick={handleSave}>
          Save Settings
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset to Defaults
        </button>
      </div>

      {saved && <div className="success-message">Settings saved!</div>}
    </div>
  )
}
