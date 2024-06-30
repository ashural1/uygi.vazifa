import { Form, Link, useActionData } from "react-router-dom";
import InputForm from "../components/InputForm";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import useLogin from "../hooks/useLogin";
import { useEffect, useState } from "react";
export let actionLogin = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { password, email };
};
function Login() {
  const usreData = useActionData();
  const { sigInWithEmail,  } = useLogin();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (usreData) {
      if (usreData.email.trim() && usreData.password.trim()) {
        sigInWithEmail(usreData.email, usreData.password);
      }
      if (!usreData.email.trim()) {
        setErrors((prev) => {
          return { ...prev, email: "input-error" };
        });
      }
      if (!usreData.password.trim()) {
        setErrors((prev) => {
          return { ...prev, password: "input-error" };
        });
      }
    }
  }, [usreData]);

  let { handleLogin } = useLogin();
  return (
    <div className="auth-continer">
      <div className="auth-left"></div>
      <div className="auth-right ">
        <div className=" p-10 pt-4 bg-base-300   w-96  items-center gap-5  ">
          <Form method="post">
          <h1 className="text-4xl font-bold">Login</h1>
            <InputForm label="Email" name="email" type="email" className={`input input-bordered ${status} w-`} />
            <InputForm label="password" name="password" type="password" />
            <button
              onClick={handleLogin}
              className="btn btn-bg-accent-content w-full mb-3 mt-3"
            >
              Login
            </button>
          </Form>
          <Link
            to="/singup"
            type="button"
            className="btn btn-bg-accent-content w-full"
          >
            Singup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
