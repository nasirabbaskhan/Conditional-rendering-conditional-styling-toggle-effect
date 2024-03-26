// import Image from 'next/image'

import FAQCard from "./components/FAQCard";

export default function Home() {
  return (
    <>
      <div className="text-4xl font-bold  my-10 text-center ">
        <h1>Frequently Asked Questions</h1>
      </div>
      <FAQCard />
      <FAQCard />
      <FAQCard />
      <FAQCard />
    </>
  );
}
