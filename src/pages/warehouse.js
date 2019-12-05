import React, { useReducer } from "react"
import { graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import layoutStyle from "./warehouse.module.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { noOp } from "../utils/commonFunctions"

const initialState = {
  initialInvestment: 0,
}

function reducer(state, action) {
  const { name, value } = action
  console.log({ state, action })
  const newState = { ...state }
  newState[name] = value
  return newState
}

const Warehouse = ({ data, location, ...props }) => {
  const siteTitle = data.site.siteMetadata.title
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputChange = ({ target: input }) => {
    dispatch(input)
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`Warehouse numbers`} />
      <h3
        style={{
          ...scale(0.2),
          fontFamily: `Montserrat, sans-serif`,

          marginBottom: rhythm(1.5),
          color: "grey",
          textTransform: "uppercase",
        }}
      >
        Warehouse decision stuff
      </h3>
      <div className={layoutStyle.wrapper}>
        <div className={layoutStyle.fullCol}>
          <div>
            <label for="initialInvestment">Current value</label>
            <br />
            $
            <input
              type="text"
              name="initialInvestment"
              value={state.initialInvestment}
              onChange={e => inputChange(e)}
            />
          </div>
        </div>
        <div className={layoutStyle.halfCol}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            blandit ipsum at lacus gravida mattis. Nullam consequat tempus sem
            eget mollis. Morbi risus nisl, porttitor eu tincidunt vel, accumsan
            id lacus. In tellus velit, tristique tincidunt sagittis et, tempus
            eu tortor. Ut eget efficitur tortor, quis sodales nisi. Nulla
            hendrerit lacinia neque, ut tempus lectus condimentum at.
            Pellentesque condimentum magna vitae nibh gravida tincidunt. Duis
            ultrices aliquam dignissim. Suspendisse viverra mauris elit, sit
            amet tincidunt nibh tincidunt non. Vestibulum vitae mi eget nibh
            condimentum luctus non id felis. Integer tincidunt quis dolor at
            pulvinar. Vestibulum hendrerit odio metus, vitae facilisis leo
            semper sit amet. Nam mattis ante ut ante malesuada faucibus. Proin
            sollicitudin vehicula felis, ut fringilla nisi feugiat vitae.
          </p>
          <p>
            Quisque tristique rutrum leo non luctus. Nunc sagittis lectus eros,
            eget aliquet velit mollis sit amet. Duis et luctus ligula. Maecenas
            rhoncus, neque sed sollicitudin consectetur, dui justo lobortis
            nisl, quis fringilla nibh libero ac ante. Nulla ac odio id diam
            rhoncus accumsan. Nullam condimentum risus est, id consectetur erat
            dapibus non. Phasellus suscipit neque nulla, et ullamcorper orci
            porta vel. Ut nec consequat enim. Pellentesque sed nisl consectetur
            mi tristique lobortis. Pellentesque eu suscipit metus. Fusce urna
            nibh, ullamcorper et elit ut, hendrerit viverra magna. Mauris
            interdum, dolor sit amet rhoncus vestibulum, nisl massa ullamcorper
            metus, ac fermentum dui justo eget nisi.
          </p>
        </div>
        <div className={layoutStyle.halfCol}>
          <p>
            Quisque tristique rutrum leo non luctus. Nunc sagittis lectus eros,
            eget aliquet velit mollis sit amet. Duis et luctus ligula. Maecenas
            rhoncus, neque sed sollicitudin consectetur, dui justo lobortis
            nisl, quis fringilla nibh libero ac ante. Nulla ac odio id diam
            rhoncus accumsan. Nullam condimentum risus est, id consectetur erat
            dapibus non. Phasellus suscipit neque nulla, et ullamcorper orci
            porta vel. Ut nec consequat enim. Pellentesque sed nisl consectetur
            mi tristique lobortis. Pellentesque eu suscipit metus. Fusce urna
            nibh, ullamcorper et elit ut, hendrerit viverra magna. Mauris
            interdum, dolor sit amet rhoncus vestibulum, nisl massa ullamcorper
            metus, ac fermentum dui justo eget nisi.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Warehouse

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
