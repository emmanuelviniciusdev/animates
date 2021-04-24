import { darken } from 'polished'
import styled from 'styled-components'

export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background: rgba(21, 21, 21, 0.6);
    backdrop-filter: blur(10px);

    @media (min-width: 960px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bgDefault};
    display: flex;
    flex-direction: column;

    .modal-header,
    .modal-body,
    .modal-footer {
        padding: 30px;
    }

    .modal-header,
    .modal-footer {
        background-color: ${(props) => props.theme.bgTertiary};
        border-color: ${(props) =>
            darken(0.08, props.theme.borderColorPrimary)};
    }

    .modal-header {
        border-bottom-style: solid;
        border-bottom-width: 3px;

        span {
            font-weight: 600;
            font-size: 18px;
        }
    }

    .modal-body {
        overflow-y: auto;

        form .wrapper-input {
            margin-bottom: 45px;
        }
    }

    .modal-footer {
        margin-top: auto;
        border-top-style: solid;
        border-top-width: 3px;

        button {
            margin-right: 10px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    @media (min-width: 960px) {
        width: 500px;
        height: 550px;
        border-radius: 5px;

        .modal-header {
            border-radius: 5px 5px 0 0;
        }

        .modal-footer {
            border-radius: 0 0 5px 5px;
        }
    }
`
