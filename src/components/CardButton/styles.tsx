import styled, { css } from 'styled-components'
import { HasIconHeart } from './types'

export const Button = styled.button<{ hasIconHeart: HasIconHeart }>`
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 10px 30px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.bgDefault};
    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.05),
        10px 10px 20px rgba(0, 0, 0, 0.25);
    color: ${(props) => props.theme.colorPrimary};
    font-weight: bold;
    font-size: 18px;

    .icon {
        font-size: 30px;
        color: ${(props) => props.theme.colorPrimary};

        ${(props) =>
            props.hasIconHeart &&
            css`
                color: ${(props) => props.theme.bgPrimary};
                stroke: #fff;
                stroke-width: 20px;
            `}
    }
`
