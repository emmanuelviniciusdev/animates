import styled from 'styled-components'

export const ForgotPasswordArea = styled.div`
    margin-top: -27px;
    margin-bottom: 40px;
    display: flex;
`

export const ForgotPasswordContent = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-left: auto;

    .icon {
        font-size: 20px;
    }

    a {
        color: ${(props) => props.theme.colorPrimary};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`
