import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// TODO: Setup automated alerts/logs when this component is rendered

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>

      <h3>Page Not Found</h3>
      <h4>Everything is fine. Nothing is ruined.</h4>

      <p>
        However, whatever you were looking for either doesn't exist or something
        has gone horribly wrong. Possible reasons:
      </p>

      <ul>
        <li>The page has moved to LA to become a rockstar</li>
        <li>
          The page no longer exists and may or may not be buried in the back
          yard
        </li>
        <li>You took a wrong turn and got lost</li>
        <li>You like typing invalid URLs</li>
      </ul>

      <p>
        Return to the <Link to="/">homepage</Link>
      </p>
    </>
  );
};

export default NotFound;
