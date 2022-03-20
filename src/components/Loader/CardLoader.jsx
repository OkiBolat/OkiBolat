import React from "react"
import ContentLoader from "react-content-loader"
import Card from "../Card/Card.jsx"
  
const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={421}
    viewBox="0 0 320 421"
    backgroundColor="#362b2b"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="381" y="299" rx="0" ry="0" width="116" height="126" /> 
    <rect x="0" y="0" rx="32" ry="32" width="320" height="421" />
  </ContentLoader>
)

export const renderSkeletone = () => {
  return (
    [...Array(8)]).map((item, index) => (
      <Card
        key={index}
        item={item}
      >
      </Card>
    ))
}

export default MyLoader