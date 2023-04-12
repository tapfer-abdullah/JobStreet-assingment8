import { Link, useRouteError } from "react-router-dom";
import './error.css';
import Header from "../Header/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    
    <>
    <Header></Header>
      <div id="error-page" className="text-red-600 text-center error-div bg-slate-500 p-10 w-2/4 mx-auto mt-40 rounded-xl">
      <h1 className="text-3xl font-extrabold my-3">404</h1>
      <p className="text-xl font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className=' m-3 py-2 px-3 bg-slate-400 rounded-md w-40 h-16 mx-auto'>
        <Link className="font-bold text-green-900 text-lg" to="/">Back to Home</Link>
      </button>
    </div>
    </>
  );
}