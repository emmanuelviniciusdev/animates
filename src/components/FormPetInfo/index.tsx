import React, { useEffect, useRef } from 'react'
import AppInput from '../AppInput'
import { Form, WrapperInputCheckbox, WrapperButtonSave } from './styles'
import InputMask from 'inputmask'
import FormInputMessage from '../FormInputMessage'
import RoundedButton from '../../components/RoundedButton'
import floppyDiskDuotone from '@iconify/icons-ph/floppy-disk-duotone'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { transformYupDate } from '../../shared/helpers'
import { toast } from 'react-toastify'
import AppSelectInput from '../AppSelectInput'
import AppTextarea from '../AppTextarea'
import { appAxios } from '../../shared/helpers'

function FormPetInfo() {
    const dateOfBirthInputRef = useRef<HTMLInputElement>(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            dateOfBirth: '',
            description: '',
            petIsOpenToRelationships: false,
            petIsForAdoption: false,
            species: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            dateOfBirth: Yup.date().transform(transformYupDate).required(),
            description: Yup.string().required(),
            petIsOpenToRelationships: Yup.boolean(),
            petIsForAdoption: Yup.boolean(),
            species: Yup.string().required(),
        }),
        onSubmit(values, formikHelpers) {
            console.log(values)
            formikHelpers.setSubmitting(false)
            toast.success('alterações salvas com sucesso!')
        },
    })

    /**
     * Masks the "date of birth" input.
     */
    useEffect(() => {
        if (dateOfBirthInputRef.current)
            InputMask('99/99/9999').mask(dateOfBirthInputRef.current)
    }, [])

    /**
     * Gets the available list of species.
     */
    useEffect(() => {
        appAxios()
            .get(`dominios`)
            .then(console.log)
            .catch((err) => console.log(err))
    }, [])

    const mySpecies = Array.from({ length: 5 }).map((_, index) => ({
        id: index,
        name: `Espécie ${index}`,
    }))

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

                <AppTextarea
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

                <AppSelectInput
                    aria-label="espécie"
                    style={{ marginBottom: '50px' }}
                    {...formik.getFieldProps('species')}
                >
                    <option value="">Selecione a espécie...</option>

                    {mySpecies.map((specie) => (
                        <option key={specie.id} value={specie.id}>
                            {specie.name}
                        </option>
                    ))}
                </AppSelectInput>
                {formik.touched.species && formik.errors.species && (
                    <FormInputMessage
                        message={formik.errors.species}
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
