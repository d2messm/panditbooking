import { useAuth } from '../hooks/useAuth';
import { User } from '../types/customUser';

const ProfilePage = () => {
  const { user } = useAuth() as { user: User };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p><strong>Name:</strong> {user?.user_metadata?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default ProfilePage; 