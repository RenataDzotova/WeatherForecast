import styled from 'styled-components';

export const Text = styled.p`
    font-size: ${props=>props.fontSize || "21px"};
    font-weight: ${props=>props.fontWeight || "normal"};
    color: ${props=>props.color};
    margin: ${props=>props.margin || "0px"};

`


export const FlexBox = styled.div`
    display:flex;
    justify-content:${props=>props.justifyContent || "center"};
    align-items:${props=>props.alignItems || "center"};
    flex-direction:${props=>props.dir || "row"};
    flex-wrap: ${props=>props.flexWrap};
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgColor};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin || "0px"};
    min-height: ${props=>props.minHeight};
    max-height: ${props=>props.maxHeight};
    background-image: ${props=>props.linearGradient || "none"}, url(${props=>props.bgImage});
    background-position: ${props=>props.bgPosition || "center"};
    background-size: ${props=>props.bgSize || "cover"};
    background-repeat: ${props=>props.bgRepeat};
    border-radius:${props=>props.borderRadius};
    filter: ${props=>props.filter};
    border: ${props=>props.border};
    z-index:${props=>props.zIndex};
    position: ${props=>props.position};
    top: ${props=>props.top};
    left:${props=>props.left};
    bottom: ${props=>props.bottom};
    border-bottom-style: ${props=>props.borderBottom};
    box-shadow: ${props=>props.boxShadow};
    border-top: ${props=>props.topBorder};
    border-bottom: ${props=>props.bottomBorder};
    color: ${props=>props.color};
    font-weight: ${props=>props.fontWeight};
    cursor: ${props=>props.cursor};
    max-width: ${props=>props.maxWidth};
    min-width: ${props=>props.minWidth};
    overflow-y: ${props=>props.overflowY};
    overflow-anchor: ${props=>props.overflowA};
    overflow-x: ${props=>props.overflowX};
`

export const Wrapper = styled(FlexBox) `
    width: 100vw;
    min-width: ${props=>props.minWidth};
    height: ${props=>props.height || "100vh"};
    padding:${props=>props.padding};
    overflow-x: ${props=>props.overflowX};
    overflow-y: ${props=>props.overflowY};
    background-image: ${props=>props.linearGradient || "none"}, url(${props=>props.bgImage});
    background-position: ${props=>props.bgPosition || "center"};
    background-size: ${props=>props.bgSize || "cover"};
`


export const ImgPlaceholder = styled.div`
    width: ${props=>props.width || "134px"};
    height: ${props=>props.height || "154px"};
    border-radius: ${props=>props.borderRadius || "8px 0px 0px 8px"};
    background-image: url(${props=>props.bgImage});
    margin: ${props=>props.margin};
    position: ${props=>props.position};
    top: ${props=>props.top};
    background-position: center;
    background-size: cover;
`