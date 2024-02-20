import styled from "styled-components";

type ContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    height?: string
}

export const Container = styled.div<ContainerPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-around'};
  align-items: ${props => props.align || 'center'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: ${props => props.height || '100%'};
  margin: 10px auto;
  border: 2px solid darkseagreen;
  width: 260px;
  padding: 10px;
  color: darkgray;
  border-radius: 10px;
`