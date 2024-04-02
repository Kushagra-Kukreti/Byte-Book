import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const validateCredentials = (email, password) => {
    const emailRegex =  new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
    const passwordRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      localStorage.setItem("access_token","true");
      navigate("/");
    } else {
      setIsAlert(true);
    }
  };

  const [isAlert, setIsAlert] = useState(false);
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        size={"sm"}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {isAlert && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {"Invalid credentials"}
        </Alert>
      )}

      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        onClick={() => validateCredentials(inputs.email, inputs.password)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
