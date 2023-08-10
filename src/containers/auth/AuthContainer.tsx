import { Link } from "react-router-dom";
import Button from "../../components/elements/Button";
import TextField from "../../components/elements/TextField";

export default function AuthContainer() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-1/4 space-y-6">

        <div className="mb-4">
          <h1 className="mb-1 text-4xl font-semibold text-black">
            Welcome back again!
          </h1>
          <p className="font-normal text-gray-400">We are proud that you are come back!</p>
        </div>

        <TextField
          label="Login"
          placeholder="username"
        />

        <TextField
          label="Password"
          placeholder="********"
        />

        <Link to={"/"}>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700" >
            Sign in
          </Button>
        </Link>

      </div>
    </div>
  )
}