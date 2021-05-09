import { lighten } from 'polished'
import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    margin-bottom: 40px;
    position: relative;

    .icon {
        font-size: 120px;
    }

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
