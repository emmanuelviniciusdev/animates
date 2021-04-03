import { darken } from 'polished'
import styled from 'styled-components'

export const MatchNotification = styled.div`
    width: 100%;
    background-color: transparent;
    padding: 20px 0;
    transition: 0.1s all;
    display: flex;
    flex-direction: column;

    &:last-child {
        margin-bottom: 100px;
    }

    &:hover {
        background-color: ${(props) => darken(0.03, props.theme.bgDefault)};
    }

    @media (min-width: 1280px) {
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const MatchNotificationContent = styled.div`
    display: flex;
    gap: 18px;
    margin-left: 20px;
`

export const MatchNotificationPicture = styled.img`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-top: 15px;
`

export const MatchNotificationDescription = styled.p``

export const MatchNotificationDate = styled.p`
    font-size: 14px;
    color: #ccc;
`

export const MatchNotificationActions = styled.div`
    button {
        font-weight: bold;
        margin-right: 12px;
    }
`

export const NoNotifications = styled.div`
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;

    .icon {
        font-size: 80px;
        color: ${(props) => props.theme.colorPrimary};
    }

    p {
        font-size: 20px;
    }
`
