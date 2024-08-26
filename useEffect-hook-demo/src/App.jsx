import { useState, useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  // const [color,SetColor] = useState(0)

  // useEffect(() => {
  //   alert('Welcome User ')    
  // }, [])

  // useEffect(() => {
  //   alert('New Count is ',{count})
  //   SetColor(color+1)
  // }, [count])

  const [userList, setUserList] = useState([])
  const [loading, SetLoading] = useState(true)
  const [error, SetError] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        let x = await fetch('https://reqres.in/api/users?page=2')
        if (!x.ok) {
          throw new Error('Network Problem Occured ')
        }
        const data = await x.json();
        setUserList(data.data);
        SetLoading(false)
      }catch(error){
        SetError(error)
        SetLoading(false)
      }      
    };
    getUser();
  }, [])

  if(loading){
    return <h3>Loading ....</h3>
  }

  if(error){
    return <h3>Errors are {error}</h3>
  }

    
  return (
      <div>
      <h1>User List</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name} <br />
            <img src={user.avatar} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
