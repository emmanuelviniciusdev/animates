import styled from 'styled-components'
import { lighten } from 'polished'

export const LoadingCard = styled.div`
    /* background-color: green; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 0;
    margin-bottom: 40px;
    position: relative;

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

    @media (min-width: 600px) {
        width: 450px;
        background-color: ${(props) => lighten(0.035, props.theme.bgDefault)};
        border: solid 4px ${(props) => props.theme.bgSecondary};
        border-radius: 5px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);

        .report-btn {
            top: auto;
            bottom: 15px;
            right: 15px;
        }
    }

    @media (min-width: 960px) {
        width: 550px;

        .report-btn {
            bottom: 20px;
            right: 20px;
        }
    }
`
