import React from 'react'
import AppModal from '../AppModal'
import SimpleButton from '../SimpleButton'
import AppTextarea from '../AppTextarea'
import AppSelectInput from '../AppSelectInput'
import { Props } from './types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import FormInputMessage from '../FormInputMessage'

function ReportModal({ onClose }: Props) {
    const formik = useFormik({
        initialValues: { reportType: '', description: '' },
        validationSchema: Yup.object({
            reportType: Yup.string().required(),
            description: Yup.string(),
        }),
        onSubmit(values, formikHelpers) {
            console.log(values)

            formikHelpers.setSubmitting(false)
            toast.dark(
                'Obrigado pela denúncia. Medidas cabíveis serão tomadas.'
            )

            if (onClose) onClose()
        },
    })

    return (
        <>
            <AppModal>
                <>
                    <header className="modal-header">
                        <span>Denuciar perfil</span>
                    </header>

                    <section className="modal-body">
                        <form>
                            <AppSelectInput
                                aria-label="Tipo de denúncia"
                                style={{ marginBottom: '50px' }}
                                {...formik.getFieldProps('reportType')}
                            >
                                <option value="">Tipo de denúncia</option>
                                <option value="value-1">Denúncia tipo 1</option>
                                <option value="value-2">Denúncia tipo 2</option>
                                <option value="value-3">Denúncia tipo 3</option>
                            </AppSelectInput>
                            {formik.touched.reportType &&
                                formik.errors.reportType && (
                                    <FormInputMessage
                                        message={formik.errors.reportType}
                                        style={{
                                            marginTop: '-30px',
                                            marginBottom: '25px',
                                        }}
                                    />
                                )}

                            <AppTextarea
                                placeholder="Descrição (opcional)"
                                aria-label="Descrição (opcional)"
                                {...formik.getFieldProps('description')}
                            />
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

export default ReportModal
