import { Link } from "react-router-dom";

const Nosotros = (props) => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 font-D-DIN">
      <div className="absolute top-0 left-10 top-10 h-16 w-16">
        <Link
          className="rounded-md bg-black px-3.5 py-2.5 text-xl font-size: 1.25rem; font-semibold text-white shadow-sm hover:bg-slate-50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
        <h1>Sobre GamerTech</h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p className="text-justify">
              
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};
export default Nosotros;
