import { lighten } from 'polished'
import styled from 'styled-components'

// TODO: apply placeholder loading effect.
export const SkeletonCard = styled.div`
    /* background-color: green; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;
    padding: 50px 0;

    .picture,
    .info,
    .action .btn,
    .report-btn {
        background-color: ${(props) => lighten(0.09, props.theme.bgDefault)};
    }

    .picture {
        width: 300px;
        height: 233px;
        border-radius: 5px;
    }

    .info {
        width: 320px;
        height: 70px;
        border-radius: 30px;
    }

    .action {
        display: flex;
        gap: 25px;

        .btn {
            width: 90px;
            height: 50px;
            border-radius: 5px;
        }
    }

    .report-btn {
        position: absolute;
        top: -15px;
        right: 20px;
        width: 52px;
        height: 45px;
        border-radius: 5px;
    }
`

export const WrapperCard = styled.div`
    width: 100%;
    /* background-color: green; */

    &:hover {
        cursor: grab;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 0;
    margin-bottom: 40px;
    position: relative;

    @media (min-width: 600px) {
        width: 450px;
        background-color: ${(props) => lighten(0.035, props.theme.bgDefault)};
        border: solid 4px ${(props) => props.theme.bgSecondary};
        border-radius: 5px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 960px) {
        width: 550px;
    }
`

export const Picture = styled.img`
    width: 300px;
    border-radius: 5px;
    border: solid 4px ${(props) => props.theme.bgSecondary};

    @media (min-width: 960px) {
        width: 350px;
    }
`

export const Information = styled.div`
    width: 320px;
    background-color: ${(props) => lighten(0.09, props.theme.bgDefault)};
    border: solid 4px ${(props) => props.theme.bgSecondary};
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 4px 1fr;

    span {
        padding: 20px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
    }

    @media (min-width: 960px) {
        width: 350px;
    }
`

export const InformationSeparator = styled.div`
    width: 4px;
    height: 100%;
    background-color: ${(props) => props.theme.bgSecondary};
`

export const Actions = styled.div`
    display: flex;
    gap: 25px;
`

export const ButtonAction = styled.button`
    padding: 10px 30px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.bgDefault};
    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.05),
        10px 10px 20px rgba(0, 0, 0, 0.25);

    .icon {
        font-size: 30px;
        color: ${(props) => props.theme.colorPrimary};
    }

    .icon-heart {
        color: ${(props) => props.theme.bgPrimary};
        stroke: #fff;
        stroke-width: 20px;
    }
`

export const ReportButton = styled.button`
    background-color: transparent;
    position: absolute;
    top: -15px;
    right: 0;

    @media (min-width: 600px) {
        top: auto;
        bottom: 15px;
        right: 15px;
    }

    @media (min-width: 960px) {
        bottom: 20px;
        right: 20px;
    }

    .icon {
        font-size: 40px;
        color: #ffaa2b;
    }
`
