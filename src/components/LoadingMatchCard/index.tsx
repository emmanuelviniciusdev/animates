import { motion, Variants } from 'framer-motion'
import React from 'react'
import { PlaceholderLoadingItem } from '../../styles/commonStyles'
import { LoadingCard } from './styles'

function LoadingMatchCard() {
    const variants: Variants = {
        hidden: {
            scale: 0.8,
            opacity: 0.4,
        },
        visible: {
            scale: 1,
            opacity: 1,
        },
    }

    return (
        <motion.div initial="hidden" animate="visible" variants={variants}>
            <LoadingCard>
                <PlaceholderLoadingItem className="picture" />
                <PlaceholderLoadingItem className="info" />
                <div className="action">
                    <PlaceholderLoadingItem className="btn" />
                    <PlaceholderLoadingItem className="btn" />
                </div>
                <PlaceholderLoadingItem className="report-btn" />
            </LoadingCard>
        </motion.div>
    )
}

export default LoadingMatchCard
