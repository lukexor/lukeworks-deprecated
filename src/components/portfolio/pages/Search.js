import React from "react";
import { Helmet } from "react-helmet";

const Search = () => {
  return (
    <section className="fadein">
      <Helmet>
        <title>Search Results | LukeWorks</title>
        <meta
          name="description"
          content="Search Results for Blog Posts and Projects by Lucas Petherbridge."
        />
      </Helmet>

      <header>
        <h3>Search Results</h3>
      </header>

      {/* TODO: Implement search */}
      <p>No search results found.</p>
    </section>
  );
};

export default Search;
