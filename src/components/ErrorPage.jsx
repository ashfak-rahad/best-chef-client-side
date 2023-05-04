import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center  mx-16">
      <div id="error-page">
        
        <div>
            <img className="md:w-1/2 px-3 mx-auto " src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1931.jpg?w=740&t=st=1683210853~exp=1683211453~hmac=9ddfcbaeca54741bb09269c99cf7ca84dbb059a80cf44f548b6e2282ee2f2c2b" alt="" />
        </div>
        
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className="btn btn-outline" to ="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
