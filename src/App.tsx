import UserCardCustom from "./components/UserCardCustom"


function App() {

  return (
    <>
    <header className="bg-purple-700 py-3">
      <div className="flex justify-center items-center p-2">
        <h1 className="text-white text-4xl">Tailwind Components</h1>
      </div>
    </header>
    <section className="bg-slate-100 py-10">
      <div className="max-w-8xl mx-auto border border-red-600">
          <h1 className="text-3xl border border-slate-400 shadow rounded-lg p-2">Dashboard</h1>
          <UserCardCustom/>
      </div>
    </section>
    </>
  )
}

export default App
