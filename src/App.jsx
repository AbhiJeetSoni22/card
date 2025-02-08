import  { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        setUser(response.data.results[0]);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 p-4">
      {loading ? (
        <div className="text-xl font-semibold text-white">Loading...</div>
      ) : (
        user && (
          <div className="bg-white shadow-xl rounded-xl p-6 flex items-center space-x-6 border border-gray-300 w-[600px] transform transition-all duration-300 hover:scale-105">
            {/* Image Section */}
            <img
              src={user.picture.large}
              alt="User"
              className="w-50 h-50 rounded-lg border-4 border-gray-600 shadow-lg transform transition-all duration-500 hover:scale-102"
            />

            {/* User Details Section */}
            <div className="flex flex-col space-y-3 text-gray-800">
              <div className="flex space-x-2">
                <p className="text-2xl font-semibold text-gray-900">{user.name.first}</p>
                <p className="text-2xl font-semibold text-gray-900">{user.name.last}</p>
              </div>
              <p className="text-md text-gray-600">
                <span className="font-semibold text-gray-800">Gender:</span> {user.gender}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-semibold text-gray-800">Age:</span> {user.dob.age}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-semibold text-gray-800">Email:</span> {user.email}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-semibold text-gray-800">Phone:</span> {user.phone}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-semibold text-gray-800">Cell:</span> {user.cell}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-semibold text-gray-800">Address:</span> {user.location.street.number}, {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-semibold text-gray-800">Nationality:</span> {user.nat}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
