import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import galeriaStyles from "../styles/pages/Galeria.module.scss"

const GaleriaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)/" }
          relativeDirectory: { regex: "/(images/galeria)|(galeria)/" }
        }
      ) {
        edges {
          node {
            base
            name
            relativeDirectory
            childImageSharp {
              fluid {
                originalImg
                base64
                src
                srcSet
                aspectRatio
                sizes
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className={galeriaStyles.listNameHover}>
    <Navbar />
      <Head title="Galeria" />
      <section className={galeriaStyles.photogrid}>
        {data.allFile.edges.map(({ node }, index) => (
          <div className={galeriaStyles.box} key={index}>
            <div className={galeriaStyles.imgBox}>
              <img src={node.childImageSharp.fluid.originalImg} alt={node.name}></img>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default GaleriaPage
