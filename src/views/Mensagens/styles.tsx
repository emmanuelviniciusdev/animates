import styled from 'styled-components'

export const MatchList = styled.div`
    /* background-color: green; */
    width: 100%;
    height: auto;
    overflow-y: hidden;
    white-space: nowrap;
    overflow-x: auto;
    margin-top: -5px;
    padding-top: 12px;
`

export const PetPictureMatchList = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 35px;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }
`

export const WrapperMessageList = styled.div`
    margin-top: 50px;
`

export const MessageList = styled.div`
    margin-top: 50px;
`
