import React, { useEffect, useRef } from 'react'
import AppInput from '../AppInput'
import {
    Form,
    Textarea,
    WrapperInputCheckbox,
    WrapperButtonSave,
} from './styles'
import InputMask from 'inputmask'
import FormInputMessage from '../FormInputMessage'
import RoundedButton from '../../components/RoundedButton'
import floppyDiskDuotone from '@iconify/icons-ph/floppy-disk-duotone'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { transformYupDate } from '../../shared/helpers'
import { toast } from 'react-toastify'

function FormPetInfo() {
    const dateOfBirthInputRef = useRef<HTMLInputElement>(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            dateOfBirth: '',
            description: '',
            petIsOpenToRelationships: false,
            petIsForAdoption: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            dateOfBirth: Yup.date().transform(transformYupDate).required(),
            description: Yup.string().required(),
            petIsOpenToRelationships: Yup.boolean(),
            petIsForAdoption: Yup.boolean(),
        }),
        onSubmit(values, formikHelpers) {
            console.log(values)
            formikHelpers.setSubmitting(false)
            toast.success('alterações salvas com sucesso!')
        },
    })

    useEffect(() => {
        if (dateOfBirthInputRef.current)
            InputMask('99/99/9999').mask(dateOfBirthInputRef.current)
    }, [])

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <AppInput
                    placeholder="nome"
                    aria-label="nome"
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name && (
                    <FormInputMessage
                        message={formik.errors.name}
                        style={{
                            marginTop: '-30px',
                            marginBottom: '25px',
                        }}
                    />
                )}

                <AppInput
                    ref={dateOfBirthInputRef}
                    placeholder="data de nascimento (dia/mês/ano)"
                    aria-label="data de nascimento (dia/mês/ano)"
                    {...formik.getFieldProps('dateOfBirth')}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <FormInputMessage
                        message={formik.errors.dateOfBirth}
                        style={{
                            marginTop: '-30px',
                            marginBottom: '25px',
                        }}
                    />
                )}

                <Textarea
                    placeholder="sobre o pet..."
                    aria-label="sobre o pet..."
                    {...formik.getFieldProps('description')}
                />
                {formik.touched.description && formik.errors.description && (
                    <FormInputMessage
                        message={formik.errors.description}
                        style={{
                            marginTop: '-30px',
                            marginBottom: '25px',
                        }}
                    />
                )}

                <WrapperInputCheckbox>
                    <input
                        type="checkbox"
                        id="petIsOpenToRelationships"
                        {...formik.getFieldProps('petIsOpenToRelationships')}
                    />
                    <label htmlFor="petIsOpenToRelationships">
                        meu pet está em busca de um parceiro(a)
                    </label>
                </WrapperInputCheckbox>
                <WrapperInputCheckbox>
                    <input
                        type="checkbox"
                        id="petIsForAdoption"
                        {...formik.getFieldProps('petIsForAdoption')}
                    />
                    <label htmlFor="petIsForAdoption">
                        o pet está para adoção
                    </label>
                </WrapperInputCheckbox>

                <WrapperButtonSave>
                    <RoundedButton
                        hasShadow
                        icon={floppyDiskDuotone}
                        isLoading={formik.dirty && formik.isSubmitting}
                    >
                        salvar alterações
                    </RoundedButton>
                </WrapperButtonSave>
            </Form>
        </>
    )
}

export default FormPetInfo
