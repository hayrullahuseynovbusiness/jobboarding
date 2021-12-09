import JobPost from "../components/JobPost";

function HomePage() {
  return (
    <div>
      <div className="mx-auto divide-y" style={{ width: "420px" }}>
        <JobPost /> <JobPost /> <JobPost /> <JobPost /> <JobPost />
<a href="/api/auth/login">Login</a>
      </div>
    </div>
  );
}

export default HomePage;
