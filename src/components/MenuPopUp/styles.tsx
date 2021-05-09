import styled from 'styled-components'

export const PopUp = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${(props) => props.theme.bgDefault};
    z-index: 2;

    @media (min-width: 1280px) {
        width: 400px;
        height: 530px;
        position: absolute;
        border: solid 5px ${(props) => props.theme.bgSecondary};
        border-radius: 5px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
        right: 20px;
        top: 100px;
    }

    @media (min-width: 1320px) {
        right: 0;
    }
`

export const Header = styled.header`
    background-color: ${(props) => props.theme.bgSecondary};
    height: 70px;
    display: flex;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px;
    width: 100%;
    /* background: green; */
`

export const WrapperIcon = styled.div`
    .icon {
        font-size: 30px;
        margin-right: 15px;
    }
`

export const Title = styled.span`
    font-weight: bold;
    font-size: 18px;
`

export const CloseButton = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.colorPrimary};
    font-size: 20px;
    margin-left: auto;
    padding: 10px;
    display: flex;
`

export const Content = styled.section`
    height: 100%;
    overflow-y: auto;
    /* background: green; */

    @media (min-width: 1280px) {
        height: 459px;
    }
`
