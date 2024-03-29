import { lighten } from 'polished'
import styled from 'styled-components'
import { ActionUploadType } from './types'

export const WrapperActionUpload = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    height: 200px;

    @media (min-width: 600px) {
        flex-direction: row;
    }
`

export const ActionUpload = styled.div<{
    type: ActionUploadType
    disabled?: boolean
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => lighten(0.05, props.theme.bgTertiary)};
    border-radius: 30px;
    padding: 20px;
    cursor: ${(props) => (props.disabled ? 'wait' : 'pointer')};

    p {
        font-size: 18px;
        text-align: center;
    }

    .icon {
        font-size: 80px;
    }

    @media (min-width: 600px) {
        width: ${(props) =>
            props.type === 'device-camera' ? '200px' : '300px'};
    }

    @media (min-width: 980px) {
        width: ${(props) =>
            props.type === 'device-camera' ? '250px' : '350px'};

        p {
            width: ${(props) =>
                props.type === 'device-camera' ? 'auto' : '90%'};
        }
    }
`

export const WrapperGallery = styled.div`
    /* background: green; */
    margin-top: 20px;
    display: flex;
    gap: 25px;
`
