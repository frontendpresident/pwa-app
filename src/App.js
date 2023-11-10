import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))  
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
      <Header />
      {users && users.length > 0 && users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
