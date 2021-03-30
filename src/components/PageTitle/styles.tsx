import styled from 'styled-components'
import { LineWidth } from '../PageTitle/types'

const lineWitdhs = {
    auto: 'auto',
    greaterThanContent: '180%',
    smallerThanContent: '40%',
}

export const WrapperPageTitle = styled.div`
    max-width: max-content;
`

export const Line = styled.div<{ lineWidth: LineWidth }>`
    width: ${(props) => lineWitdhs[props.lineWidth]};
    height: 5px;
    background-color: ${(props) => props.theme.bgPrimary};
    margin-top: -11px;
`
