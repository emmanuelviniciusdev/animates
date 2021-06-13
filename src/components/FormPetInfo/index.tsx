import React, { useEffect, useRef, useState } from 'react'
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
import { DomainItem } from '../../shared/types/api.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function FormPetInfo() {
    const dateOfBirthInputRef = useRef<HTMLInputElement>(null)
    const [species, setSpecies] = useState<DomainItem[]>([])

    const auth = useSelector((state: RootState) => state.auth)

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
     * Gets the user's pet.
     */
    useEffect(() => {
        if (!auth.userid) return

        appAxios(false)
            .get(`usuario/${auth.userid}/animal`)
            .then((res) => {
                if (res.data.length === 0) return

                const userPet = res.data[0].animal

                console.log(userPet)

                formik.setValues({
                    name: userPet.nome ?? '',
                    dateOfBirth: userPet.dataNascimento ?? '',
                    description: userPet.descricao ?? '',
                    petIsForAdoption: userPet.fl_para_adocao ?? false,
                    petIsOpenToRelationships:
                        userPet.fl_buscando_parceiro ?? false,
                    species: userPet.dominio_tp_animal.id ?? '',
                })
            })

        // eslint-disable-next-line
    }, [auth.userid])

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
        appAxios(false)
            .get(`dominios?tp_dominio=tipo_animal`)
            .then((res) => setSpecies(res.data.items))
            .catch((err) => console.log(err))
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

                    {species.map((specie) => (
                        <option key={specie.id} value={specie.id}>
                            {specie.nm_dominio}
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
                        checked={formik.values.petIsOpenToRelationships}
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
                        checked={formik.values.petIsForAdoption}
                        {...formik.getFieldProps('petIsForAdoption')}
                    />
                    <label htmlFor="petIsForAdoption">
                        o pet está para adoção
                    </label>
                </WrapperInputCheckbox>

                <WrapperButtonSave>
                    <RoundedButton
                        type="submit"
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
