import { AuthLayout } from '../layout/AuthLayout';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registration">
      <form>
        <div>
            <input
              type="text"
              placeholder="Type your name here"
            />
            <input
              type="email"
              placeholder="example@mail.com"
            />
            <input
              type="password"
              placeholder="123Abc"
            />
            <input
              type="password"
              placeholder="123Abc"
            />
              <button>
                Create account 🔥
              </button>
              <p>You already have an account?</p>
              <Link to="/auth/login" color="inherit">
                Login
              </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
