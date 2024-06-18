import { useRef, useState } from "react";
import { Button } from "@mantine/core";
import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Enroll_Modal from "../../Pages/Home page/modals/Enroll_Modal";
import { useForm } from "@mantine/form";
import { PasswordInput, TextInput } from "@mantine/core";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleLogin = () => {
    // localStorage.setItem()
    // if (
    //   email.current.value === "hund@gmail.com" &&
    //   password.current.value === "123456"
    // ) {
    //   navigate("/student_landingpage");
    //   if (email.current.value !== "hund@gmail.com") {
    //     alert("Incorrect email");
    //   } else if (email.current.value === "hund@gmail.com" && password.current.value !== "123456") {
    //     alert("Incorrect password");
    //   }
    // } else if (
    //   email.current.value === "admin@gmail.com" &&
    //   password.current.value === "admin12"
    // ) {
    //   navigate("/admin_dashboard");
    //   if (email.current.value !== "admin@gmail.com") {
    //     alert("Incorrect email");
    //   } else if (email.current.value === "admin@gmail.com" && password.current.value !== "admin12") {
    //     alert("Incorrect password");
    //   }
    // } else {
    //   alert("Data not found");
    // }
    const formData = JSON.parse(localStorage.getItem('formData')) || [];

    const user = formData.find(
      (user) =>
        user.email === emailRef.current.value &&
        user.password === passwordRef.current.value
    );
  
    if (user) {
      alert('Login successful');
      console.log('User Found:', user);
      if (user.email === 'admin@mail.com') {
        console.log('Navigating to Admin Dashboard');
        navigate('/admin_dashboard');
      } else if (user.email === 'inst@mail.com') {
        console.log('Navigating to Student Landing Page');
        navigate('/instructor_landingpage');
      }else {
        console.log('Navigating to Student Landing Page');
        navigate('/student_landingpage');
      }
    } else {
      alert('Invalid email or password');
      console.log('No matching user found');
    }
    console.log(JSON.parse(localStorage.getItem('formData')));
  };
  const [openmodal, setOpenmodal] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      password: (value) =>
        value.length < 6 ? "Password must be at least 6" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="flex">
      <Button
        variant="white"
        color="rgba(8, 8, 8, 1)"
        size="md"
        className="w-[100px]"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <div className="wrap">
        <h1 className="mt-40 ml-64 font-medium">Login</h1>
        <form onSubmit={form.onSubmit(() => console.log())}>
          <div className="border-2 w-[400px] h-[350px] mt-10 ml-64 rounded-[20px]">
            <div className="mt-10 ml-16">
              <div className="input-box flex ">
                <TextInput
                  mt="sm"
                  // label="Email"
                  ref={emailRef}
                  placeholder="Enter Your Email"
                  required
                  variant="unstyled"
                  className=" border-b-[4px] font-size-[2px] border-[#09335F] w-[250px]"
                  {...form.getInputProps("email")}
                />

                <FaUser className="ml-[-30px] mt-5" />
              </div>
              <div className="input-box flex  mt-7">
                <PasswordInput
                  // label="Password"
                  ref={passwordRef}
                  placeholder="Enter Your Password"
                  required
                  variant="unstyled"
                  key={form.key("password")}
                  {...form.getInputProps("password")}
                  className="border-b-[4px] border-[#09335F] w-[250px]"
                />

                {/* <FaLock className="ml-[-30px]" /> */}
              </div>

              <div className="mt-5">
                <Button
                  variant="transparent"
                  href="#"
                  className="text-[#09335F] font-medium"
                  onClick={() => navigate("/forgot_password")}
                >
                  Forgot Password?
                </Button>
              </div>

              <Button
                className="mt-12 mr-6 w-[150px]"
                variant="filled"
                color="#09335F"
                size="md"
                radius="xl"
                type="submit"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div className="">
        <img
          className="mt-24  "
          src="src/assets/images/Login/Login Image.png"
          alt=""
        />
        <div className="flex ml-32  ">
          <p>Not a member?</p>
          <a
            href="#"
            className="text-[#09335F] font-bold ml-32"
            onClick={() => setOpenmodal(true)}
          >
            Register
          </a>
        </div>
      </div>
      <Enroll_Modal openmodal={openmodal} setOpenmodal={setOpenmodal} />
    </div>
  );
};

export default Login;
