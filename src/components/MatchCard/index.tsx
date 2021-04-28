import React, { useState } from 'react'
import {
    Actions,
    WrapperCard,
    Card,
    Information,
    InformationSeparator,
    Picture,
    ReportButton,
} from './styles'
import tobby from '../../assets/images/tobby.jpg'
import { Icon } from '@iconify/react'
import heartFill from '@iconify/icons-ph/heart-fill'
import xBold from '@iconify/icons-ph/x-bold'
import warningDuotone from '@iconify/icons-ph/warning-duotone'
import CardButton from '../CardButton'
import ReactTooltip from 'react-tooltip'
import { motion, PanInfo } from 'framer-motion'
import { toast } from 'react-toastify'

function MatchCard() {
    const [cardWhileDragRotate, setCardWhileDragRotate] = useState(0)

    const matchProcess = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        toast.dismiss('match-request-sent')

        const petWasLoved = info.offset.x >= 250
        const petWasNotLoved = info.offset.x <= -250

        if (petWasLoved) {
            toast.dark(
                () => (
                    <span>
                        ❤️ Solicitação de match enviada com sucesso para o(a){' '}
                        <b>Tobby!</b>
                    </span>
                ),
                {
                    hideProgressBar: true,
                    position: 'top-right',
                }
            )
        } else if (petWasNotLoved) {
            console.log('usuário não amou o pet')
        }
    }

    return (
        <>
            <ReactTooltip id="tooltip-match-card" effect="solid" />

            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.7}
                whileDrag={{ rotate: cardWhileDragRotate, cursor: 'grabbing' }}
                onDrag={(event, info) =>
                    setCardWhileDragRotate(info.offset.x >= 0 ? 5 : -5)
                }
                onDragEnd={matchProcess}
            >
                <WrapperCard>
                    <Card>
                        <Picture src={tobby} alt="Foto de perfil do(a) Tobby" />

                        <Information>
                            <span>Tobby</span>
                            <InformationSeparator />
                            <span>3 meses</span>
                        </Information>

                        <Actions>
                            <CardButton
                                aria-label="Não amar"
                                data-tip="Não amar"
                                data-for="tooltip-match-card"
                                icon={xBold}
                            />
                            <CardButton
                                aria-label="Amar"
                                data-tip="Amar"
                                data-for="tooltip-match-card"
                                icon={heartFill}
                                hasIconHeart={true}
                            />
                        </Actions>

                        <ReportButton
                            aria-label="Denunciar"
                            data-for="tooltip-match-card"
                            data-tip="Denunciar"
                        >
                            <Icon icon={warningDuotone} className="icon" />
                        </ReportButton>
                    </Card>
                </WrapperCard>
            </motion.div>
        </>
    )
}

export default MatchCard
