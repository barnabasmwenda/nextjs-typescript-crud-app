"use-client";

const SignIn = () => {
  return (
    <main className="wrapper-padding content-wrapper">
      <div className="forms">
        <h1>Sign in</h1>
        <form>
          <div className="form-group mt-3">
            <label htmlFor="name">Email</label>
            <input type="email" className="mt-2" name="name" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="mt-2" name="password" />
          </div>
          <button type="submit" className="primary-cta mt-3 w-100">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
