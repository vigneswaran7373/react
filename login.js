import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function onsubmit() {
    navigate("/about");
  }

  return (
    <>
      <h1>Login page</h1>
      <button onClick={onsubmit}>Login</button>
    </>
  );
}

export default Login;

{
  /*this code for navigate the link*/
}
