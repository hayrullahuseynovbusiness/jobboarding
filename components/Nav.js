import Link from "next/link";
import Button from "./Button";
function Nav() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <h1 className="text-2xl font-bold border-b-4 w-12 border-green-600">
        Logo
      </h1>
      <div className="flex items-center space-x-4">
        <Link href="post">
          <a>Post a job</a>
        </Link>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Nav;
