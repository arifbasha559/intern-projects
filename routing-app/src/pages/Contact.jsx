export default function Contact() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600">
        Have a question, comment, or just want to say hi? We'd love to hear from you.
      </p>
      <ul className="flex items-center justify-center mt-4 space-x-4">
        <li>
          <a
            href="mailto:arifbasha559@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://x.com/arifbasha559"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arifbasha559"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arifbasha559/"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

