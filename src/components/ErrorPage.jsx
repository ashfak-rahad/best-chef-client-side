import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center">
      <div id="error-page">
        <h1>Oops!404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <div>
            <img src="https://img.freepik.com/free-vector/404-error-template-with-planet-flat-style_23-2147731776.jpg?w=740&t=st=1683122641~exp=1683123241~hmac=1a70305e2e84677cf25d6abc5b683fee4f6c737df371c4dffaf3a28957480a1f" alt="" />
        </div>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
