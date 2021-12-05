import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import { Link } from "react-router-dom";

const Search = () => {
  const [setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
      })
      .catch(err => console.log(err));
  }, [trackTitle]);

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
      <i className="fab fa-napster" /> --Lyric|Finder-- <i className="fab fa-napster" />
      </h1>
      <p className="lead text-center">Find your favorite song lyrics</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Input the Song title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5 bg-danger" type="submit">
          Search
        </button>
        <Link to="../../About" className="btn btn-light btn-sm mb-4">
          About this Apication?
        </Link>
      </form>
    </div>
  );
};

export default Search;
