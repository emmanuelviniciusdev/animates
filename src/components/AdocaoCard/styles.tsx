import { lighten } from 'polished'
import styled from 'styled-components'

export const Card = styled.div`
    max-width: 450px;
    padding: 20px;
    background-color: ${(props) => lighten(0.035, props.theme.bgDefault)};
    border-radius: 5px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
`

export const PetInformation = styled.div``

export const PetNameAndAge = styled.p`
    font-size: 30px;
`

export const PetDescription = styled.p`
    margin-top: -10px;
    font-size: 18px;
`

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const ReportButton = styled.button`
    background: transparent;
    padding: 10px 0;

    .icon {
        color: ${(props) => props.theme.colorPrimary};
        font-size: 30px;
    }
`
