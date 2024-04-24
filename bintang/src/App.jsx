import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-yellow-300 p-6">
        <ul className="flex gap-6 justify-center">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
    </>
  )
}

export default App
