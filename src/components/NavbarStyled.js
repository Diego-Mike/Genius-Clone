import styles from "styled-components";

const ResponsiveNavbar = {
  responsive1: `@media screen and (max-width: 1000px)`,
  responsive2: `@media screen and (max-width: 500px)`
};

export const NavbarContain = styles.section`

width: 100%;
height: 10vh;
background: #ffff64;

display: flex;
align-items: center;
justify-content: center;

z-index: 10;

img{
    width: 60px;
    cursor: pointer;
}

${ResponsiveNavbar.responsive1}{

    height: 8.5vh;

    img{
        width: 55px;
    }

}

${ResponsiveNavbar.responsive2}{

    height: 8vh;

    img{
        width: 50px;
    }

}


`;
