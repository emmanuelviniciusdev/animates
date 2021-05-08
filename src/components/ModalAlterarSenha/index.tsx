import React from 'react'
import { Props } from './types'
import AppModal from '../AppModal'
import SimpleButton from '../SimpleButton'
import AppInput from '../AppInput'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import FormInputMessage from '../FormInputMessage'

function ModalAlterarSenha({ onClose }: Props) {
    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            newPasswordConfirmation: '',
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required(),
            newPassword: Yup.string().required(),
            newPasswordConfirmation: Yup.string()
                .required()
                .oneOf([Yup.ref('newPassword')], 'As senhas não batem!'),
        }),
        onSubmit(values, formikHelpers) {
            console.log(values)

            formikHelpers.setSubmitting(false)
            toast.success('senha alterada com sucesso!')

            if (onClose) onClose()
        },
    })

    return (
        <>
            <AppModal>
                <>
                    <header className="modal-header">
                        <span>alteração de senha</span>
                    </header>

                    <section className="modal-body">
                        <form onSubmit={formik.handleSubmit}>
                            <AppInput
                                type="password"
                                placeholder="senha atual"
                                aria-label="senha atual"
                                {...formik.getFieldProps('currentPassword')}
                            />
                            {formik.touched.currentPassword &&
                                formik.errors.currentPassword && (
                                    <FormInputMessage
                                        message={formik.errors.currentPassword}
                                        style={{
                                            marginTop: '-30px',
                                            marginBottom: '25px',
                                        }}
                                    />
                                )}

                            <AppInput
                                type="password"
                                placeholder="nova senha"
                                aria-label="nova senha"
                                {...formik.getFieldProps('newPassword')}
                            />
                            {formik.touched.newPassword &&
                                formik.errors.newPassword && (
                                    <FormInputMessage
                                        message={formik.errors.newPassword}
                                        style={{
                                            marginTop: '-30px',
                                            marginBottom: '25px',
                                        }}
                                    />
                                )}

                            <AppInput
                                type="password"
                                placeholder="confirmar nova senha"
                                aria-label="confirmar nova senha"
                                {...formik.getFieldProps(
                                    'newPasswordConfirmation'
                                )}
                            />
                            {formik.touched.newPasswordConfirmation &&
                                formik.errors.newPasswordConfirmation && (
                                    <FormInputMessage
                                        message={
                                            formik.errors
                                                .newPasswordConfirmation
                                        }
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

export default ModalAlterarSenha
