import React from "react";
import { Helmet } from "react-helmet";

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error };
  }

  componentDidCatch(error, info) {
    // TODO Log the error to an error reporting service
    console.error(error, info);
  }

  // TODO: Style this page
  render() {
    if (this.state.error) {
      return (
        <>
          <Helmet>
            <title>Something Went Wrong | LukeWorks</title>
          </Helmet>

          <h3>Something Went Wrong</h3>
          <h4>Everything is fine. Nothing is ruined.</h4>

          <p>However, something unexpected happened.</p>

          <p>
            Return to the <a href="/">homepage</a>
          </p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
