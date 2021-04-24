import React from 'react'
import { Modal, ModalBackground } from './styles'
import { Props } from './types'

function AppModal({ children }: Props) {
    return (
        <>
            <ModalBackground>
                <Modal>
                    {/*
                        Children's structure:

                        <header className="modal-header">
                            <span>Title</span>
                        </header>

                        <section className="modal-body">
                            <div></div>
                        </section>

                        <footer className="modal-footer">
                            <button>button</button>
                        </footer>
                    */}

                    {children}
                </Modal>
            </ModalBackground>
        </>
    )
}

export default AppModal
