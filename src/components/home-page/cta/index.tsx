import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-4xl md:text-6xl tracking-tight">
        Build your digital product like never before.
      </h2>
      <p className="text-slate-400 mt-4 text-lg md:text-xl">
        {/* Optional content can be added here */}
      </p>
      <div className="flex mt-5">
        <Link
          href="https://app.lnkr.store"
          passHref
          className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
