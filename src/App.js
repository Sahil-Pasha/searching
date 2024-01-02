import { useState } from 'react'
import './App.css'
const mockData = [
  'farhan',
  'Rehan',
  'Adnan',
  'jikran',
  'Noman',
  'Samoon',
  'Pasha',
  'Javed',
  'Arman',
  'Shakir',
  'shakir',
  'rehan',
  'Noman',
]
function App() {
  const [data, setData] = useState(mockData)
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    if (searchText === '') {
      setData(data)
      return
    }
    const filteredData = data.filter((item) => {
      if (item.toLowerCase().includes(searchText.toLowerCase())) {
        return item
      }
    })
    setData(filteredData)
  }
  return (
    <div className="App">
      <div>
        <h1>This is searching app</h1>
        <input
          type="text"
          placeholder="type any name"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span>
          <button onClick={handleSearch}>Search</button>
        </span>
      </div>
      <div>
        <ul style={{ listStyleType: 'none' }}>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
