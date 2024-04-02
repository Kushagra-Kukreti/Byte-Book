import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate()

  const validateCredentials = (email, password) => {
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );
    const passwordRegex = new RegExp(
      "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      localStorage.setItem("access_token", "true");
      setIsAlert(false); 
       navigate("/");
    } else {
      setIsAlert(true);
    }
  };

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
        placeholder="Username"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h="full">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          ></Button>
        </InputRightElement>
      </InputGroup>

      {isAlert && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {"Invalid email or password format"}
        </Alert>
      )}

      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        onClick={() => validateCredentials(inputs.email, inputs.password)}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
