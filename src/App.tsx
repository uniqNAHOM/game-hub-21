import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";
function App() {
  const { users, errors, isLoading, setUser, setError } = useUsers();
  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUser(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUser(originalUser);
    });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "Nahom" };
    const originalUser = users;
    setUser([newUser, ...users]);
    userService
      .addUser(newUser)
      .then((res) => setUser([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUser(originalUser);
      });
  };
  const updateUser = (user: User) => {
    const orginalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUser(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUser(orginalUser);
    });
  };
  return (
    <>
      {errors && <p className="text-danger">{errors}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
