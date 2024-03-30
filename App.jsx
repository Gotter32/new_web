import './App.css'
import Buttons from './components/Buttons'
import List_labs from './components/list_labs'

function App() {
  return (
    <div>
      <Header />
        <Buttons label="что-то" onClick={() => alert ("Hello world!")} />
        <List_labs />
        <Footer />
    </div>
  )
}

export default App;
