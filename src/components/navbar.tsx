import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
export const Navbar = () => {
  const [user] = useAuthState(auth)
  const logOut = async () => {
    await signOut(auth)
  }
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>

      <div className="user">
        {user && (
          <>
            {user?.displayName}
            <img src={user?.photoURL || ''} alt="" />
            <button onClick={logOut}>Logout</button>
          </>
        )}
      </div>
    </div>
  )
}
