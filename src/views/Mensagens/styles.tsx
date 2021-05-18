import { lighten } from 'polished'
import styled from 'styled-components'

export const WrapperMessageList = styled.div`
    margin-top: 50px;

    .loading-message {
        background-color: ${(props) => lighten(0.09, props.theme.bgDefault)};
        height: 140px;
        margin-bottom: 40px;
        border-radius: 5px;

        @media (min-width: 980px) {
            width: 800px;
        }
    }
`

export const MessageList = styled.div`
    margin-top: 50px;
`

export const WrapperLatestMatchesList = styled.div`
    min-height: 100px;
`

export const WrapperLoadingSpinner = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.bgSecondary};
    border-radius: 50%;
    bottom: 80px;
    right: 20px;

    @media (min-width: 1280px) {
        bottom: 30px;
        right: 30px;
    }
`

export const NoMessages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
        font-size: 100px;
    }

    p {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }

    @media (min-width: 600px) {
        .icon {
            font-size: 120px;
        }

        p {
            font-size: 23px;
        }
    }
`
