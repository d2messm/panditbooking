import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { useState } from 'react';

interface ForgotPasswordData {
  email: string;
}

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { resetPassword } = useAuthStore();

  const onSubmit = async ({ email }: ForgotPasswordData) => {
    try {
      setLoading(true);
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-orange-900 sm:text-4xl">
            Reset Your Password
          </h2>
          <p className="mt-2 text-base text-orange-800/90 sm:text-lg">
            Enter your email to receive a reset link
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/90 backdrop-blur-sm py-8 px-6 shadow-xl rounded-xl sm:rounded-2xl border border-orange-100/50 sm:px-10">
            {success ? (
              <div className="text-center space-y-4">
                <div className="text-green-600 text-lg">
                  Password reset email sent successfully!
                </div>
                <Link
                  to="/login"
                  className="text-orange-700 hover:text-orange-800 font-medium"
                >
                  Back to Login
                </Link>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-sm font-medium text-orange-800/90 mb-1">
                    Email address
                  </label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-orange-500/80" />
                    </div>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="block w-full pl-10 pr-3 py-3 border border-orange-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200 placeholder:text-orange-400/70"
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600/90">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-red-600/90 text-sm text-center">{error}</p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 sm:py-3 px-4 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition-colors text-sm sm:text-base disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>

                <div className="text-center text-sm text-orange-800/70">
                  Remember your password?{' '}
                  <Link
                    to="/login"
                    className="font-semibold text-orange-700 hover:text-orange-800"
                  >
                    Login here
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 