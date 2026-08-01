export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          My Capstone Project
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Welcome to the Capstone Skeleton built with Next.js and Tailwind CSS.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Dashboard</h2>
            <p className="text-gray-600">
              Placeholder page for the project dashboard.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Profile</h2>
            <p className="text-gray-600">
              Placeholder page for the user profile.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Settings</h2>
            <p className="text-gray-600">
              Placeholder page for application settings.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-gray-600">
              Learn more about this capstone application.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Health Check</h2>
            <p className="text-gray-600">
              Displays fetched data to verify the application is working.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Next.js App</h2>
            <p className="text-gray-600">
              Built using the App Router with Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}