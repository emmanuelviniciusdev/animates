import { lighten } from 'polished'
import styled from 'styled-components'

export const FakeTextarea = styled.div`
    background-color: ${(props) => lighten(0.06, props.theme.bgDefault)};
    color: ${(props) => props.theme.colorSecondary};
    width: 100%;
    padding: 30px;
    border-radius: 30px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    font-size: 18px;

    /**
     * Applies placeholder
     */
    &[contentEditable='true']:empty:not(:focus):before {
        content: attr(placeholder);
    }
`
