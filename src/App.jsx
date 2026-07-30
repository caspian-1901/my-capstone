import { useMemo, useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  theme: 'auto',
  notifications: true,
};

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  return errors;
}

export default function App() {
  const [values, setValues] = useState(initialFormState);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => validateForm(values), [values]);
  const isValid = Object.keys(errors).length === 0;

  function updateField(event) {
    const { name, type, checked, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSubmitted(false);
  }

  function markTouched(event) {
    const { name } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTouched({
      name: true,
      email: true,
      theme: true,
      notifications: true,
    });

    if (!isValid) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="page-shell">
      <section className="settings-card" aria-labelledby="settings-title">
        <div className="settings-card__header">
          <p className="eyebrow">Account preferences</p>
          <h1 id="settings-title">Settings</h1>
          <p className="lede">Update your profile details and notification preferences.</p>
        </div>

        <form className="settings-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={updateField}
              onBlur={markTouched}
              aria-invalid={Boolean((touched.name || submitted) && errors.name)}
              aria-describedby={(touched.name || submitted) && errors.name ? 'name-error' : undefined}
            />
            {(touched.name || submitted) && errors.name ? (
              <p className="field-error" id="name-error" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={updateField}
              onBlur={markTouched}
              aria-invalid={Boolean((touched.email || submitted) && errors.email)}
              aria-describedby={(touched.email || submitted) && errors.email ? 'email-error' : undefined}
            />
            {(touched.email || submitted) && errors.email ? (
              <p className="field-error" id="email-error" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="theme">Theme</label>
            <select id="theme" name="theme" value={values.theme} onChange={updateField} onBlur={markTouched}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div className="field field--checkbox">
            <input
              id="notifications"
              name="notifications"
              type="checkbox"
              checked={values.notifications}
              onChange={updateField}
              onBlur={markTouched}
            />
            <label htmlFor="notifications">Enable notifications</label>
          </div>

          <div className="actions">
            <button type="submit" disabled={!isValid}>
              Save
            </button>
            <p className="status" aria-live="polite">
              {submitted ? 'Settings saved locally.' : 'Complete the form to enable saving.'}
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}