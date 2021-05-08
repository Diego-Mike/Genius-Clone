import React, { useEffect, useState, useRef } from "react";

import {
  HomeContain,
  SearcherForm,
  SearcherContainInputs,
  SearcherInput,
  SearcherResults,
  SearcherButton,
  SearchIcon,
  SearcherContainButton,
  Loading,
  NoData,
  AddData,
  ContainData,
  SingleAS
} from "./HomeStyled";

import ShowData from "./ShowData";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [artistSong, setArtistSong] = useState({
    data: {
      artist: "",
      title: "",
      biography: {},
      lyrics: ""
    }
  });

  const [allData, setAllData] = useState([]);

  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const [singleData, setSingleData] = useState({});
  const [show, setShow] = useState(false);

  const NotFirstTime = useRef(true);

  // Asking for the artists and songs

  // Asking the server for lyrics by artist and title

  const APIcall = async () => {
    try {
      if (artist && title) {
        const data = await fetch(
          `https://api.lyrics.ovh/v1/${artist}/${title}`
        );

        const response = await data.json();

        setArtistSong({
          ...artistSong,
          data: {
            artist: artistSong.data.artist,
            title: artistSong.data.title,
            biography: artistSong.data.biography,
            lyrics: response.lyrics
          }
        });
        setArtist("");
        setTitle("");
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Asking the server for byography by artist name

  const BiographyAPI = async () => {
    try {
      if (artistSong.data.lyrics) {
        const data = await fetch(
          `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistSong.data.artist}`
        );

        const response = await data.json();

        setLoading(false);

        setArtistSong({
          ...artistSong,
          data: {
            artist: artistSong.data.artist,
            title: artistSong.data.title,
            biography: response.artists,
            lyrics: artistSong.data.lyrics
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (NotFirstTime.current) {
      NotFirstTime.current = false;
      return;
    } else {
      APIcall();

      setTimeout(() => {
        if (artist && title && !artistSong.data.lyrics && loading) {
          setArtist("");
          setTitle("");
          setLoading(false);
        } else {
          return;
        }
      }, 8000);
    }
  }, [artistSong]);

  useEffect(() => {
    BiographyAPI();
  }, [artistSong.data.lyrics]);

  // Fulling artistSong to make calls to API'S

  const handleSubmit = e => {
    e.preventDefault();
    setArtistSong({
      ...artistSong,
      data: {
        artist: artist.toLowerCase(),
        title: title.toLowerCase(),
        biography: {},
        lyrics: ""
      }
    });
    setLoading(true);
  };

  const handleAdd = () => {
    if (artistSong.data.biography && artistSong.data.lyrics) {
      if (allData.length > 0) {
        const check = allData.find(
          single => single.data.lyrics === artistSong.data.lyrics
        );

        if (check !== undefined) {
          setArtistSong({
            data: {
              artist: "",
              title: "",
              biography: {},
              lyrics: ""
            }
          });
        } else {
          setAllData([...allData, artistSong]);
        }
      } else {
        setAllData([...allData, artistSong]);
      }
    }

    setArtistSong({
      data: {
        artist: "",
        title: "",
        biography: {},
        lyrics: ""
      }
    });
  };

  const handleLyrics = singleSong => {
    setSingleData(singleSong);
    setShow(true);
    document.body.style = "overflow: hidden";
  };

  return (
    <>
      {show && (
        <ShowData
          setShow={setShow}
          singleData={singleData}
          setSingleData={setSingleData}
        />
      )}

      <HomeContain>
        {/* The Form To Search Songs */}

        <SearcherForm onSubmit={handleSubmit}>
          <SearcherContainInputs>
            <div>
              <SearcherInput
                type="text"
                name="artist"
                placeholder="Artist"
                maxLength="40"
                required
                value={artist}
                onChange={e => setArtist(e.target.value.toLowerCase())}
              />
            </div>
            <div>
              <SearcherInput
                type="text"
                name="title"
                placeholder="Title"
                maxLength="50"
                value={title}
                required
                onChange={e => setTitle(e.target.value.toLowerCase())}
              />
            </div>

            <div>
              <SearcherContainButton>
                <SearcherButton type="submit">
                  <SearchIcon />
                </SearcherButton>
              </SearcherContainButton>
            </div>
          </SearcherContainInputs>
        </SearcherForm>

        {/* Showing The Results Of The Search */}

        <SearcherResults>
          {loading && <Loading />}

          {artistSong.data.biography.length > 0 ? (
            <AddData onClick={handleAdd}>Add Song</AddData>
          ) : (
            <span></span>
          )}

          {allData.length === 0 && !loading ? (
            <NoData>You haven't add any song</NoData>
          ) : (
            <>
              {!loading && (
                <ContainData>
                  {allData.map((singleSong, i) => {
                    return (
                      <SingleAS
                        key={i}
                        onClick={() => handleLyrics(singleSong)}
                      >
                        <h2>{singleSong.data.artist}</h2>
                        <p>{singleSong.data.title}</p>
                      </SingleAS>
                    );
                  })}
                </ContainData>
              )}
            </>
          )}
        </SearcherResults>
      </HomeContain>
    </>
  );
};

export default Home;
