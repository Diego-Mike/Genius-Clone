import styles, { keyframes } from "styled-components";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

// This responsive stuff it's only for the searcher

const ResponsiveHomeSearch = {
  responsive1: `@media screen and (max-width:1050px)`,
  responsive2: `@media screen and (max-width:800px)`,
  responsive3: `@media screen and (max-width:650px)`,
  responsive4: `@media screen and (max-width:500px)`,
  responsive5: `@media screen and (max-width:450px)`
};

export const HomeContain = styles.section`

width: 100%;
min-height: 90vh;

display: flex;
flex-direction: column;

z-index: 10;

`;

export const SearcherForm = styles.form`

width: 100%;
min-height: 25vh;

display: flex;
align-items: center;
justify-content: center;

box-shadow: 0px 15px 10px -16px rgb(78, 78, 78); 

transition: .3s ease;

&:hover{
    box-shadow: 0px 15px 10px -12px rgb(78, 78, 78); 
}

${ResponsiveHomeSearch.responsive1}{
    min-height: 27vh;
}

`;

export const SearcherContainInputs = styles.div`

width: 95%;
margin: auto;

display: grid;
grid-template-columns: 1fr 1fr .5fr;
align-items: center;
justify-content: center;
grid-gap: .5rem;

div{

    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1){
        grid-column: 1/2;
    }
    &:nth-child(2){
        grid-column: 2/3;
    }
    &:nth-child(3){
        grid-column: 3/4;
        margin-right: 2rem;
    }
}

${ResponsiveHomeSearch.responsive1}{
   width: 100%;
}

${ResponsiveHomeSearch.responsive3}{
    
    grid-template-columns: 1fr .05fr 1fr;
    grid-gap: 0rem;

    div{
    &:nth-child(1){
        grid-column: 1/2;
    }
    &:nth-child(2){
        grid-column: 3/4;
    }
    &:nth-child(3){
        grid-column: 2/3;
        grid-row: 2/3;
        margin-bottom: 1.5rem;
        margin-right: 0rem;
    }

    

}


}

`;

export const SearcherInput = styles.input`

width: 70%;

font-size: 1.6rem;
font-weight: 300;

padding: 1.5rem 2rem;
margin: 2rem 1rem;

border-radius: 3rem;
box-shadow: 0px 0px 2px black;

outline: none;
border: none;

${ResponsiveHomeSearch.responsive1}{
    font-size: 1.45rem;
}

${ResponsiveHomeSearch.responsive2}{
    width: 80%;
    font-size: 1.35rem;
}

${ResponsiveHomeSearch.responsive3}{
    padding: 1.3rem 1.8rem;
    width: 90%;
}

${ResponsiveHomeSearch.responsive4}{
    padding: 1rem 1.6rem;
    width: 95%;
}

${ResponsiveHomeSearch.responsive5}{
    font-size: 1.3rem;
    padding: .8rem 1.5rem;
    width: 100%;

    }

}

`;

export const SearcherButton = styles.button`

transition: .4s ease;

background: rgb(65, 163, 255);
border-radius: .5rem;

margin: 1rem;

cursor: pointer;

border: none;
outline: none;
text-decoration: none;


`;

export const SearchIcon = styles(SearchAlt)`

width: 40px;
color: white;

margin: 1rem 2rem;

${ResponsiveHomeSearch.responsive1}{
    width: 35px;
}

${ResponsiveHomeSearch.responsive2}{
    margin: .9rem 1.8rem;
    width: 30px;
}

${ResponsiveHomeSearch.responsive4}{
    margin: .8rem 1.6rem;
    width: 23px;
}

`;

export const SearcherContainButton = styles.section`

min-width: 37%;

transition: .3s ease;

&:hover ${SearcherButton}{
transform: rotateZ(-30deg);
}

&:active ${SearcherButton}{
    transform: rotateZ(-30deg) scale(0.8);
}


`;

// This responsive it's for the results stuff

// Text

const ResponsiveText = {
  responsive1: `@media screen and (max-width: 900px)`,
  responsive2: `@media screen and (max-width: 500px)`
};

// Results

const ResponsiveResults = {
  responsive1: `@media screen and (max-width: 1000px)`,
  responsive2: `@media screen and (max-width: 850px)`,
  responsive3: `@media screen and (max-width: 650px)`,
  responsive4: `@media screen and (max-width: 500px)`
};

//

export const SearcherResults = styles.div`

width: 100%;
min-height: 65vh;

display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;

`;

const jumping = keyframes`

0%{
opacity: 1;
background: rgba(65, 163, 255);
}

70%{
opacity: 0;
background: rgba(244,244,244)
}

100%{
    opacity: 1;
    background: rgba(65, 163, 255);
}

`;

export const Loading = styles.div`

margin-top: 10rem;
width: 50px;
height: 50px;
border-radius: 500px;

animation: ${jumping} 1s ease-in infinite;

`;

export const NoData = styles.span`

font-size: 3rem;
font-weight: 400;
text-align: center;
margin-top: 10rem;

${ResponsiveText.responsive1}{
    font-size: 2.6rem;
    margin-top: 11.5rem;
}

${ResponsiveText.responsive2}{
    font-size: 2.2rem;
    margin-top: 12rem;
    margin-left: 2rem;
    margin-right: 2rem;
}

`;

export const AddData = styles.span`

font-size: 2rem;
font-weight: 300;
padding: .8rem 3rem;

margin-top: 5rem;

border: 2px solid rgb(65, 163, 255);
border-radius: .5rem;

cursor: pointer;

transition: .2s ease;

&:active {
    transform: scale(0.8);
}

${ResponsiveResults.responsive1}{
    font-size: 1.8rem;
    padding: .7rem 2.8rem;
}

${ResponsiveResults.responsive2}{
    font-size: 1.7rem;
    padding: .6rem 2.7rem;
}

${ResponsiveResults.responsive3}{
    font-size: 1.6rem;
    padding: .6rem 2.6rem;
}

`;

export const ContainData = styles.section`

width: 100%;

display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
flex-wrap: wrap;

margin-top: 3rem;
margin-bottom: 5rem;

${ResponsiveResults.responsive4}{
    flex-direction: column;
    justify-content: center;
}

`;

export const SingleAS = styles.div`

width: 30%;
margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;

border-radius: .5rem;

background: rgba(255,255,255);

min-height: 15vh;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

cursor: pointer;

transition: .2s ease;

&:active {
    transform: scale(0.8);
}

h2{
    font-size: 2.5rem;
    padding: 2.5rem 1.5rem;
}

p{
    font-size: 2.2rem;
    font-weight: 300;
    padding-bottom: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

${ResponsiveResults.responsive1}{
    width: 28%;
    margin-right: .5rem;
    margin-left: .5rem;

    h2{
        font-size: 2.3rem;
    }

    p{
        font-size: 2rem;
    }

}

${ResponsiveResults.responsive2}{
    width: 40%;

    h2{
        font-size: 2.4rem;
        padding-top: 2.8rem;
    }

    p{
        font-size: 2.1rem;
        padding-bottom: 2.4rem;
    }

}

${ResponsiveResults.responsive3}{
    width: 42%;

    h2{
        font-size: 1.9rem;
       
    }

    p{
        font-size: 1.6rem;
    }

}

${ResponsiveResults.responsive4}{
    width: 70%;
}

`;
