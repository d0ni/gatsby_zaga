import styled from "styled-components"

export const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ justify = "center" }) => justify};
  align-items: ${({ align = "center" }) => align};
  flex-direction: ${({ column = false }) => (column ? "column" : "row")};
  flex-wrap: ${({ wrap = false }) => (wrap ? "wrap" : "nowrap")};
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = 0 }) => margin};
  ${({ width }) => (width ? `width: ${width};` : "")}
  ${({ height = null }) => (height ? `height: ${height};` : "")}
`

export const PositionBox = styled.div`
  position: ${({ absolute = false }) => (absolute ? "absolute" : "relative")};  
  ${({ top }) => (top ? `top: ${top};` : "")}
  ${({ bottom }) => (bottom ? `bottom: ${bottom};` : "")}
  ${({ left }) => (left ? `left: ${left};` : "")}
  ${({ right }) => (right ? `right: ${right};` : "")}

  ${({ width }) => (width ? `width: ${width};` : "")}
  ${({ height = null }) => (height ? `height: ${height};` : "")}
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = 0 }) => margin};

  ${({ absolute = false }) => (absolute ? `background-color: #373737;` : "")}
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ width = "1170px" }) => width};
`

export const H2 = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = 0 }) => margin};
  ${({ uppercase }) => (uppercase ? `text-transform: uppercase;` : "")}
`

export const H1 = styled.h1`
  font-size: 2.25em;
  font-weight: bold;
  color: #ffffff;
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = 0 }) => margin};
  ${({ uppercase }) => (uppercase ? `text-transform: uppercase;` : "")}
`

export const Text = styled.p`
  font-size: ${({ fontSize = "1em" }) => fontSize};
  color: #ffffff;
  line-height: ${({ lineHeight = "normal" }) => lineHeight};
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = 0 }) => margin};
  ${({ width }) => (width ? `width: ${width};` : "")}
`
