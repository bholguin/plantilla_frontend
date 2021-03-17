// Packages
import React, { useState, useEffect } from "react"
import { promiseTrackerHoc } from "react-promise-tracker"
import PropTypes from "prop-types"
// Styled components

import Loader from "react-loader-spinner"

// Styles
import { StyledLoader } from "./SpinnerLoading.styles"

const SpinnerLoadingIndicator = (props) => {
  const {
    className,
    type,
    color,
    width,
    height,
    isFetching,
    promiseInProgress,
  } = props

  const [styledActive, setStyledActive] = useState("auto")

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflowY = styledActive
    setStyledActive(props.promiseInProgress ? "hidden" : "auto")
  }, [props, styledActive])

  return isFetching ? (
    <StyledLoader className={className}>
      <Loader type={type} color={color} height={height} width={width} />
    </StyledLoader>
  ) : (
    promiseInProgress && (
      <StyledLoader className={className}>
        <Loader type={type} color={color} height={height} width={width} />
      </StyledLoader>
    )
  )
}

SpinnerLoadingIndicator.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  isFetching: PropTypes.bool,
  promiseInProgress: PropTypes.bool,
}

SpinnerLoadingIndicator.defaultProps = {
  className: "StyledLoader",
  type: "ThreeDots",
  color: `#fff`,
  width: "100",
  height: "100",
  isFetching: false,
  promiseInProgress: false,
}

export default promiseTrackerHoc(SpinnerLoadingIndicator)
