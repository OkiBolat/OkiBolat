import React from "react"
import ContentLoader from "react-content-loader"
  
const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={320}
    height={421}
    viewBox="0 0 320 421"
    backgroundColor="#C4C1CF"
    foregroundColor="#44414E"
    {...props}
  >
    <rect x="0" y="0" rx="32" ry="32" width="320" height="421" />
  </ContentLoader>
)

export const renderSkeletone = () => {
  return (
    [...Array(8)]).map((item, index) => (
      <MyLoader
        key={index}
        item={item}
      >
      </MyLoader>
    ))
}

export default MyLoader