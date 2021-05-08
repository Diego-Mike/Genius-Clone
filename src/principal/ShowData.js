import React, { useState } from "react";
import {
  Modal,
  ContainSingleArtist,
  ArtistTitle,
  LyricsBiography,
  ContainClose,
  Close,
  ContainLyricsOrBiography,
  LyricsOrBiography,
  LyricsAndBiography,
  Text
} from "./ShowDataStyled";

const ShowData = ({ setShow, singleData, setSingleData }) => {
  const [showLyrics, setShowLyrics] = useState(true);

  const handleHidden = () => {
    setSingleData({});
    document.body.style = "overflow: auto";
    setShow(false);
  };

  const image = singleData.data.biography.map(data => data.strArtistFanart);

  const biography = singleData.data.biography.map(data => data.strBiographyEN);

  return (
    <Modal>
      <ContainSingleArtist>
        {/* Showing Artist And Title */}

        {image.toString() ? (
          <ArtistTitle
            style={{
              minHeight: "45vh",

              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.87), rgba(0,0,0, 0.87)), url(${image.toString()})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <ContainClose>
              <Close onClick={handleHidden} />
            </ContainClose>
            <h2>
              {singleData.data.artist} <br />
              <span> {singleData.data.title} </span>
            </h2>
          </ArtistTitle>
        ) : (
          <ArtistTitle
            style={{
              minHeight: "40vh",
              background: "black"
            }}
          >
            <ContainClose>
              <Close onClick={handleHidden} />
            </ContainClose>
            <h2>
              {singleData.data.artist} <br />
              <span> {singleData.data.title} </span>
            </h2>
          </ArtistTitle>
        )}

        {/* Showing Lyrics - Biography */}

        <LyricsBiography>
          <ContainLyricsOrBiography>
            {showLyrics ? (
              <>
                <LyricsOrBiography>
                  <LyricsAndBiography Selected PaddingBig>
                    Lyrics
                  </LyricsAndBiography>
                  <LyricsAndBiography
                    PaddingShort
                    onClick={() => setShowLyrics(false)}
                  >
                    Biography
                  </LyricsAndBiography>
                </LyricsOrBiography>

                <Text position="left">
                  <p> {singleData.data.lyrics} </p>
                </Text>
              </>
            ) : (
              <>
                <LyricsOrBiography>
                  <LyricsAndBiography
                    PaddingBig
                    onClick={() => setShowLyrics(true)}
                  >
                    Lyrics
                  </LyricsAndBiography>
                  <LyricsAndBiography Selected PaddingShort>
                    Biography
                  </LyricsAndBiography>
                </LyricsOrBiography>

                {biography.toString() ? (
                  <Text positon="left">
                    <p> {biography.toString()} </p>
                  </Text>
                ) : (
                  <Text position="center">
                    <p>
                      There's no biography for this artist yet ! <br /> Maybe
                      he's to young to have one !
                    </p>
                  </Text>
                )}
              </>
            )}
          </ContainLyricsOrBiography>
        </LyricsBiography>
      </ContainSingleArtist>
    </Modal>
  );
};

export default ShowData;
