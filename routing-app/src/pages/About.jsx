export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover our mission, vision, and the expertise that drives our project.
        </p>
      </header>
      <main className="flex flex-col items-center">
        <section className="bg-white shadow-md rounded-lg p-8 mb-8 w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We are dedicated to delivering innovative solutions that empower individuals and businesses alike.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">Professional Expertise</h2>
          <p className="text-gray-600">
            Our team consists of industry experts with years of experience in various domains, ensuring top-notch quality and service.
          </p>
        </section>
      </main>
    </div>
  );
}

