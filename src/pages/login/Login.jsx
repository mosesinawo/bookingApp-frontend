import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import "./login.css";
import { login, useLoginUserMutation } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import SmallLoader from "../../components/loaders/smallLoader";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [res, setRes] = useState({
    data:[],
    isLoading: false,
    error: false
  })
  const dispatch = useDispatch()

  const [loginUser,{
    data,
    isLoading,
    isSuccess,
    isError,
    error
  }] = useLoginUserMutation('user')
  console.log(data)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
useEffect(() => {
 
}, [])

  const handleClick = async (e) => {
    e.preventDefault();
   await loginUser(credentials)
  };
  useEffect(() => {
   if(data !== undefined){
    dispatch(login(data.details))
    navigate("/")

   }
  }, [data])
  


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button  onClick={handleClick} className="lButton">
          {isLoading ? <SmallLoader width={20}/> : "Login"}
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
