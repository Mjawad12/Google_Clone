import React, { useEffect, useState } from "react";
import SearchNav from "./SearchNav";
import Topics from "./Topics";
import Searchres from "./Searchres";
import Information from "./Information";
import MoreResults from "./MoreResults";
import Loading from "../Loading";

export default function ResultPage() {
  const [searchIn, setsearchIn] = useState(null);
  const [searchResult, setsearchResult] = useState(null);
  const [loading, setloading] = useState(null);
  const [noMoreResults, setnoMoreResults] = useState(false);
  const getResults = async (q) => {
    const data = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API}&cx=${process.env.REACT_APP_SEARCH_ENGINE}&q=${q}`,
      {
        method: "GET",
      }
    );
    const parsedData = await data.json();
    setsearchResult(null);
    setTimeout(() => {
      setsearchResult(parsedData);
    }, [100]);
  };

  const getMore = async (q) => {
    if (searchResult.queries.nextPage) {
      const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API}&cx=${process.env.REACT_APP_SEARCH_ENGINE}&q=${searchResult.queries.nextPage[0].searchTerms}&start=${searchResult.queries.nextPage[0].startIndex}`,
        { method: "GET" }
      );
      const parsedData = await data.json();
      const results = [...searchResult.items, ...parsedData.items];
      searchResult.items = results;
      searchResult.queries = parsedData.queries;
      setTimeout(() => {
        setloading(false);
      }, [1000]);
    } else {
      setnoMoreResults(true);
      setloading(false);
    }
  };

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search);
    const query = parms.get("q");
    setsearchIn(query);
    getResults(query);
  }, []);

  return (
    <section className="searchPage">
      <SearchNav searchIn={searchIn} getResults={getResults} />
      <Topics />
      <div className="searchDiv">
        <div className="searchWrapper">
          {searchResult && searchResult.searchInformation && (
            <Information information={searchResult.searchInformation} />
          )}
          {searchResult ? (
            searchResult.items &&
            searchResult.items.map((it, index) => {
              return (
                <Searchres
                  key={index}
                  title={it.htmlTitle}
                  description={it.htmlSnippet}
                  link={it.formattedUrl}
                  pagemap={it.pagemap}
                  displaylink={it.displayLink}
                />
              );
            })
          ) : (
            <Loading />
          )}
          {!loading ? (
            searchResult &&
            searchResult.items &&
            (!noMoreResults ? (
              <MoreResults getMore={getMore} setloading={setloading} />
            ) : (
              <p className="MR">No more results</p>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
}
