import styles, { css } from "styled-components";
import { CloseSquareOutline } from "@styled-icons/evaicons-outline/CloseSquareOutline";

// Responsive

const ResponsiveModal = {
  responsive1: `@media screen and (max-width: 1000px)`,
  responsive2: `@media screen and (max-width: 800px)`,
  responsive3: `@media screen and (max-width: 550px)`,
  responsive4: `@media screen and (max-width: 450px)`
};

//

export const Modal = styles.section`

background: rgb(238, 238, 238);

position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0; 
z-index: 100;

overflow-x: hidden;
overflow-y: auto;

`;

export const ContainSingleArtist = styles.div`

width: 100%;
min-height: 100vh;

display: flex;
flex-direction: column;

`;

export const ArtistTitle = styles.div`

width: 100%;

display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

text-align: center;

h2{
    font-size: 5rem;
    color: white;
    font-family: 'Lobster';
    margin-top: 1.5rem;
}

h2 span{
    font-size: 3rem;
    color: white;
    font-family: 'Lobster';
    font-weight: 200;
}

${ResponsiveModal.responsive3}{

  h2{
    font-size: 4rem;
  }
  h2 span{
    font-size: 2.4rem;
  }

}

${ResponsiveModal.responsive4}{

  min-height: 40vh;

  h2{
    font-size: 3.5rem;
  }
  h2 span{
    font-size: 2rem;
  }

}

`;

export const ContainClose = styles.div`

width: 97%;

display: flex;
align-items: center;
justify-content: flex-end;

`;

export const Close = styles(CloseSquareOutline)`

width: 40px;
color: white;

padding: 1rem 0rem;

cursor: pointer;

transition: .2s ease;

&:active{
    transform: scale(0.8);
}

${ResponsiveModal.responsive1}{
  width: 34px;
}

${ResponsiveModal.responsive2}{
  width: 30px;
}

${ResponsiveModal.responsive3}{
  width: 26px;
}

`;

export const LyricsBiography = styles.div`

width: 100%;

background: none;

display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

`;

export const ContainLyricsOrBiography = styles.div`

width: 72%;
min-height: 75vh;

background: white;

display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

${ResponsiveModal.responsive1}{
  width: 75%;
}

${ResponsiveModal.responsive2}{
  width: 80%;
}

${ResponsiveModal.responsive4}{
  width: 82%;
}

`;

export const LyricsOrBiography = styles.div`

width: 100%;
margin-top: 1rem;
margin-bottom: 4rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

${ResponsiveModal.responsive2}{
  margin-bottom: 1rem;
}


${ResponsiveModal.responsive4}{
  margin-bottom: 0rem;
}

`;

export const LyricsAndBiography = styles.span`

color: black;
font-size: 2.3rem;
margin: 2rem 0rem;

border-radius: .6rem;

cursor: pointer;

${({ PaddingShort }) =>
  PaddingShort &&
  css`
    padding: 0.8rem 2.3rem;

    ${ResponsiveModal.responsive1} {
      padding: 0.7rem 2.1rem;
    }

    ${ResponsiveModal.responsive2} {
      padding: 0.6rem 2rem;
    }

    ${ResponsiveModal.responsive3} {
      padding: 0.6rem 1.8rem;
    }

    ${ResponsiveModal.responsive4} {
      padding: 0.6rem 1.6rem;
    }
  `}

${({ PaddingBig }) =>
  PaddingBig &&
  css`
    padding: 0.8rem 4rem;

    ${ResponsiveModal.responsive1} {
      padding: 0.7rem 3.7rem;
    }

    ${ResponsiveModal.responsive2} {
      padding: 0.6rem 3.6rem;
    }

    ${ResponsiveModal.responsive3} {
      padding: 0.6rem 3.4rem;
    }

    ${ResponsiveModal.responsive4} {
      padding: 0.6rem 3.2rem;
    }
  `}

    ${({ Selected }) =>
      Selected &&
      css`
        border: 2px solid rgb(65, 163, 255);
      `}


      transition: .2s ease;

&:active{
    transform: scale(0.8);
}

${ResponsiveModal.responsive1}{
 font-size: 2rem;
 margin: 2rem .5rem;
}

${ResponsiveModal.responsive2}{
  font-size: 1.7rem;
 }

 
${ResponsiveModal.responsive3}{
  font-size: 1.4rem;
 }

 ${ResponsiveModal.responsive4}{
  font-size: 1.2rem;
 }

`;

export const Text = styles.div`

width: 88%;
background: none;

margin-top: 1rem;
margin-bottom: 4rem;

text-align: ${({ position }) => position};

p{
    font-size: 2.2rem;
    font-weight: 300;
    padding: 3rem 0rem;
    letter-spacing: .2rem;

}

${ResponsiveModal.responsive1}{
  p{
    font-size: 1.9rem;
  }
}

${ResponsiveModal.responsive2}{
  p{
    font-size: 1.6rem;
  }
}

${ResponsiveModal.responsive2}{
  p{
    font-size: 1.4rem;
  }
}

${ResponsiveModal.responsive2}{
  p{
    font-size: 1.2rem;
  }
}

`;
