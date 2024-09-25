
type userProps ={
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}

//array of objcet 
const Users = ({users}: userProps) => {

  return (
    <div>  <h1>Users</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </li>
      ))}
    </ul>
        
    </div>
  )
}

export default Users