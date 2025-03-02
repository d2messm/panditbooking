import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import SocialButton from './SocialButton';

interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupFormData>();
  const { signUp, signInWithGoogle } = useAuthStore();

  const onSubmit = async (data: SignupFormData) => {
    try {
      setLoading(true);
      await signUp(data);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      setError('Google sign in failed');
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneSignup = () => {
    // Implementation of handlePhoneSignup
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-orange-900 sm:text-4xl">Join Divine Bookings</h2>
          <p className="mt-2 text-base text-orange-800/90 sm:text-lg">
            Create your account to book sacred ceremonies
          </p>
        </div>
        
        <p className="mt-3 text-center text-sm text-orange-800/70 sm:mt-4">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-orange-700 hover:text-orange-800">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-7xl">
        <div className="bg-white/90 backdrop-blur-sm py-6 px-4 shadow-xl rounded-xl sm:rounded-2xl border border-orange-100/50 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium text-orange-800/90 mb-1">
                  Full Name
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-orange-500/80" />
                  </div>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="block w-full pl-10 pr-3 py-3 border border-orange-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200 placeholder:text-orange-400/70"
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-600/90">{errors.name.message}</p>
                )}
              </div>

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
                  <p className="mt-1.5 text-sm text-red-600/90">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-800/90 mb-1">
                  Phone Number
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-orange-500/80" />
                  </div>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    type="tel"
                    className="block w-full pl-10 pr-3 py-3 border border-orange-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200 placeholder:text-orange-400/70"
                    placeholder="1234567890"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-sm text-red-600/90">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-800/90 mb-1">
                  Password
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-orange-500/80" />
                  </div>
                  <input
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      }
                    })}
                    type={showPassword ? 'text' : 'password'}
                    className="block w-full pl-10 pr-10 py-3 border border-orange-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-orange-700/90"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-orange-500/80" />
                    ) : (
                      <Eye className="h-5 w-5 text-orange-500/80" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-sm text-red-600/90">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-800/90 mb-1">
                  Confirm Password
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-orange-500/80" />
                  </div>
                  <input
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) =>
                        value === watch('password') || 'Passwords do not match'
                    })}
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="block w-full pl-10 pr-10 py-3 border border-orange-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-orange-700/90"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-orange-500/80" />
                    ) : (
                      <Eye className="h-5 w-5 text-orange-500/80" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1.5 text-sm text-red-600/90">{errors.confirmPassword.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 sm:py-3 px-4 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition-colors text-sm sm:text-base"
                >
                  {loading ? 'Creating account...' : 'Create Account'}
                </button>
              </div>
            </form>

            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-orange-200/70" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white/90 text-orange-600/80 text-sm sm:text-base">
                      Quick Signup Options
                    </span>
                  </div>
                </div>

                <SocialButton
                  icon="https://www.google.com/favicon.ico"
                  provider="Google"
                  onClick={handleGoogleSignup}
                  className="hover:bg-orange-50/80 text-sm sm:text-base"
                />

                <div className="space-y-3">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-orange-200/70"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;