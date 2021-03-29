import styled from 'styled-components'

export const Line = styled.div`
    /* TODO: Implement dynamic width. */
    width: 100px;
    height: 4px;
    background-color: ${(props) => props.theme.bgPrimary};
    margin-top: -11px;
`
