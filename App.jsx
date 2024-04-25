import './components/style.css'
import Buttons from './components/Buttons'
import Listlabs from './components/Listlabs'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
        <Buttons label="что-то" onClick={() => alert ("Hello world!")} />
        <Listlabs />
        <Footer />
        
    </div>
  )
}

export default App;
