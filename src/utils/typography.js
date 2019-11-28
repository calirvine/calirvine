import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    h1: {
      fontFamily: "itc-avant-garde-gothic-pro, sans-serif",
      fontWeight: 700,
      fontStyle: "normal",
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      boxShadow: `none`,
    },
    "a:hover": {
      opacity: 0.75,
      msTransition: `all 0.2s ease-in-out`,
      MozTransition: `all 0.2s ease-in-out`,
      transition: `all 0.2s ease-in-out`,
      WebkitTransition: `all 0.2s ease-in-out`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
