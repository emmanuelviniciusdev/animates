import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const List = styled.div`
    /* background-color: green; */
    width: 100%;
    height: auto;
    min-height: 105px;
    overflow-y: hidden;
    white-space: nowrap;
    overflow-x: auto;
    margin-top: -5px;
    padding-top: 12px;

    .loading-pet-picture {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 35px;
        background-color: ${(props) => lighten(0.09, props.theme.bgDefault)};
    }
`

export const PetPicture = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 35px;
    cursor: pointer;
    border: solid 4px ${(props) => darken(0.05, props.theme.borderColorPrimary)};

    &:last-child {
        margin-right: 0;
    }
`
