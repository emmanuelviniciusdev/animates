import styled from 'styled-components'
import { ApplyFontWeightRegular, LineWidth } from '../PageTitle/types'

const lineWitdhs = {
    auto: 'auto',
    greaterThanContent: '130%',
    smallerThanContent: '40%',
}

export const WrapperPageTitle = styled.div<{
    applyFontWeightRegular: ApplyFontWeightRegular
}>`
    max-width: max-content;

    .main-heading-content {
        font-weight: ${(props) =>
            props.applyFontWeightRegular ? '400' : 'inherit'};
    }
`

export const Notifications = styled.div`
    background-color: ${(props) => props.theme.bgPrimary};
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    margin-top: -5px;
    margin-left: 10px;
`

export const ContentNotification = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: green; */

    span {
        font-weight: 400;
        font-size: 20px;
        margin-right: 1px;
        margin-top: 1px;
    }
`

export const Line = styled.div<{ lineWidth: LineWidth }>`
    width: ${(props) => lineWitdhs[props.lineWidth]};
    height: 5px;
    background-color: ${(props) => props.theme.bgPrimary};
    margin-top: -11px;
`
