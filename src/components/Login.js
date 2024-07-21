import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoggedIndex } from '../store/indexReducer';
import "../styles/Auth.css";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const users = useSelector((state) => state.userReducer);

    const userChange = (e) => {
        setUsername(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username) {
                if (password === users[i].password) {
                    dispatch(changeLoggedIndex(i));
                    navigate("/");
                }
            }
        }
        setUsername("");
        setPassword("");
    }

    return (
        <div className="login-container">
            <div className="login-header">
                Log In
            </div>
            <div className="login-input">
                <TextField value={username} onChange={userChange} placeholder="Username" variant="outlined" fullWidth />
            </div>
            <div className="login-input">
                <TextField value={password} onChange={passwordChange} placeholder="Password" type="password" variant="outlined" fullWidth />
            </div>
            <div className="login-button-container">
                <input onClick={handleLogin} className="login-button" type="button" value="Log In" />
            </div>
            <div className="login-already">
                New User? <Link style={{ textDecoration: "none", fontWeight: "bold" }} to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login;
