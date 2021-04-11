import styled from 'styled-components'

export const Content = styled.div`
    width: max-content;
    padding: 5px 10px;
    border-radius: 5px;
    background: ${(props) => props.theme.bgDefault};
    color: ${(props) => props.theme.colorPrimary};
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;

    .icon {
        font-size: 24px;
    }
`
