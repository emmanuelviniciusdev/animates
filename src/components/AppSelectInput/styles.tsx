import styled from 'styled-components'

export const SelectInput = styled.select`
    width: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.colorPrimary};
    border: none;
    outline: none;
    font-size: 16px;
    border: solid ${(props) => props.theme.bgPrimary} 2px;
    padding: 15px;

    option {
        color: #000;
    }
`
