import styled from 'styled-components'

export const Modal = styled.div`
    background-color: rgba(21, 21, 21, 0.6);
    box-sizing: border-box;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border: 3px solid ${(props) => props.theme.borderColorPrimary};
    border-radius: 5px;
    padding: 30px;
`
