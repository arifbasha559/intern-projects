import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">Welcome to Our Awesome Project</h1>
        <p className="text-lg text-gray-700">Explore the features and capabilities of our project.</p>
      </header>
      <main className="flex flex-col items-center">
        <section className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600">We are dedicated to providing the best solutions for our users.</p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-600">Join us today and start exploring the features of our project.</p>
          <Link
            to="/contact" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Contact
          </Link>
        </section>
      </main>
    </div>
  );
}

