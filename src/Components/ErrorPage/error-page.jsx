import { useRouteError } from "react-router-dom";
import './error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-white text-center error-div bg-slate-500 p-10 w-2/4 mx-auto mt-40 rounded-xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}