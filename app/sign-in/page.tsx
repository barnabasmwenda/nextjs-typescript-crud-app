import "../style.css";
("use-client");

const SignIn = () => {
  return (
    <main className="wrapper-padding">
      <div className="d-flex">
        <div className="forms">
          <h1>Sign in</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input type="email" name="name" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button type="submit" className="primary-cta mt-3 w-100">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
