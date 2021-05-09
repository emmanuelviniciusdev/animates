import styled from 'styled-components'

export const GalleryContent = styled.div`
    width: 100%;
    height: auto;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    gap: 25px;
    /* background: gray; */
`

export const ButtonOpenPictureUpload = styled.button`
    background-color: ${(props) => props.theme.bgTertiary};
    min-width: 150px;
    height: 100%;
    border-radius: 5px;

    .icon {
        color: ${(props) => props.theme.colorPrimary};
        font-size: 47px;
    }
`

export const Image = styled.img`
    min-width: 200px;
    height: 200px;
    border-radius: 5px;
`

export const Caption = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: rgba(21, 21, 21, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    opacity: 0;
    transition: 0.2s all;
`

export const WrapperImage = styled.div`
    display: inline-block;
    margin-right: 35px;
    position: relative;
    /* background: green; */

    &:hover {
        ${Caption} {
            opacity: 1;
        }
    }

    &:last-child {
        margin-right: 0;
    }
`

export const ButtonIcon = styled.button`
    background-color: transparent;

    .icon {
        font-size: 60px;
        color: ${(props) => props.theme.colorPrimary};
    }

    .icon-trash {
        color: #ff4343;
    }
`
