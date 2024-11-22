import { useState } from "react";
import LoginPanel from "./LoginPanel";

const HomeCards = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true); // Open the modal
  };

  const closeLoginPanel = () => {
    setIsLoginOpen(false); // Close the modal
  };

  return (
    <div>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            {/* Mentor Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Mentors</h2>
              <p className="mt-2 mb-4">Review or Assess the Papers submitted by Students</p>
              <button
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                onClick={handleLoginClick}
              >
                <b>Login</b>
              </button>
            </div>

            {/* Student Card */}
            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Students</h2>
              <p className="mt-2 mb-4">Find any relevant and useful Research Paper or Reports</p>
              <button
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                onClick={handleLoginClick}
              >
                <b>Login</b>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Login Panel Modal */}
      <LoginPanel isOpen={isLoginOpen} onClose={closeLoginPanel} />
    </div>
  );
};

export default HomeCards;
