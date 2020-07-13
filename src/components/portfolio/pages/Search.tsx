import React from "react";
import { Helmet } from "react-helmet-async";

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

      <h3>Search Results</h3>

      {/* TODO: Implement search */}
    </section>
  );
};

export default Search;
