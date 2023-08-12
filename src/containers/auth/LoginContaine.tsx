import { Link } from "react-router-dom";
import Button from "../../components/elements/Button";
import TextField from "../../components/elements/TextField";
import { useFormik } from "formik";
import * as Yup from 'yup';


export interface LoginPayload {
  username: string;
  password: string;
}

export default function LoginContaine() {

  const formik = useFormik<LoginPayload>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      console.log("login", values)
    }
  });

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form className="flex flex-col w-1/4 space-y-6" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <h1 className="mb-1 text-4xl font-semibold text-black">
            Welcome back!
          </h1>
          <p className="font-normal text-gray-400">Don't you have an account? <Link className="font-semibold text-blue-400 underline hover:text-blue-600" to="/register">Register</Link></p>
        </div>

        <TextField
          label="Username"
          id="username"
          name="username"
          type="username"
          placeholder="docket-notes"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />

        <TextField
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="********"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        <Link to={"/"}>
          <Button type="submit" className="mt-4 bg-purple-600 hover:bg-purple-700" >
            Login
          </Button>
        </Link>
      </form>
    </div>
  )
}