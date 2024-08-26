import { useState ,useEffect} from 'react'
import './App.css'
import { Card } from './Components/Card'
import { Navbar } from './Components/Navbar'

function App() {
  // const [data, SetData] = useState(0)
  const [userData,SetUserData] = useState([])
  const [error,SetError] = useState(null)

  useEffect(() => {
    const getAPI= async ()=>{
      try {
        let x = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!x.ok){
          throw new Error('Data is Not Fetched !')
        }
        const data=await x.json()
        SetUserData(data);
      } catch (error) {
        console.error(error);
      }
      
    }
    getAPI()
  }, [])
  
  return (
    <>
      {/* <Navbar/> */}
      <Card dataFieds={userData}/>
    </>
  )
}

export default App
