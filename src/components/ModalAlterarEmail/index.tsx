import React from 'react'
import { Props } from './types'
import AppModal from '../AppModal'
import SimpleButton from '../SimpleButton'
import AppInput from '../AppInput'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import FormInputMessage from '../FormInputMessage'

function ModalAlterarEmail({ onClose }: Props) {
    const formik = useFormik({
        initialValues: { newEmail: '', newEmailConfirmation: '', password: '' },
        validationSchema: Yup.object({
            newEmail: Yup.string().required().email(),
            newEmailConfirmation: Yup.string()
                .required()
                .email()
                .oneOf([Yup.ref('newEmail')], 'Os e-mails não batem!'),
            password: Yup.string().required(),
        }),
        onSubmit(values, formikHelpers) {
            console.log(values)

            formikHelpers.setSubmitting(false)
            toast.success('e-mail alterado com sucesso!')

            if (onClose) onClose()
        },
    })

    return (
        <>
            <AppModal>
                <>
                    <header className="modal-header">
                        <span>alteração de e-mail</span>
                    </header>

                    <section className="modal-body">
                        <form onSubmit={formik.handleSubmit}>
                            <AppInput
                                type="email"
                                placeholder="novo e-mail"
                                aria-label="novo e-mail"
                                {...formik.getFieldProps('newEmail')}
                            />
                            {formik.touched.newEmail && formik.errors.newEmail && (
                                <FormInputMessage
                                    message={formik.errors.newEmail}
                                    style={{
                                        marginTop: '-30px',
                                        marginBottom: '25px',
                                    }}
                                />
                            )}

                            <AppInput
                                type="email"
                                placeholder="confirmar novo e-mail"
                                aria-label="confirmar novo e-mail"
                                {...formik.getFieldProps(
                                    'newEmailConfirmation'
                                )}
                            />
                            {formik.touched.newEmailConfirmation &&
                                formik.errors.newEmailConfirmation && (
                                    <FormInputMessage
                                        message={
                                            formik.errors.newEmailConfirmation
                                        }
                                        style={{
                                            marginTop: '-30px',
                                            marginBottom: '25px',
                                        }}
                                    />
                                )}

                            <AppInput
                                type="password"
                                placeholder="senha"
                                aria-label="senha"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <FormInputMessage
                                    message={formik.errors.password}
                                    style={{
                                        marginTop: '-30px',
                                        marginBottom: '25px',
                                    }}
                                />
                            )}
                        </form>
                    </section>

                    <footer className="modal-footer">
                        <SimpleButton onClick={formik.submitForm}>
                            salvar
                        </SimpleButton>
                        <SimpleButton btnTheme="secondary" onClick={onClose}>
                            cancelar
                        </SimpleButton>
                    </footer>
                </>
            </AppModal>
        </>
    )
}

export default ModalAlterarEmail
