import Link from "next/link";

export const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <Link href="/" className=" text-black bg-red-300 p-2 rounded">
        Go back to Home
      </Link>
    </div>
  );
};
export default About;
