import React from 'react'
import SimpleButton from '../SimpleButton'
import AppInput from '../../components/AppInput'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import envelopeSimpleDuotone from '@iconify/icons-ph/envelope-simple-duotone'
import keyDuotone from '@iconify/icons-ph/key-duotone'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import useThunkDispatch from '../../hooks/useThunkDispatch'
import { useHistory } from 'react-router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import FormInputMessage from '../FormInputMessage'
import { register } from '../../redux/ducks/auth'

function FormRegister() {
    const authState = useSelector<RootState>((state) => state.auth)
    const dispatch = useThunkDispatch()

    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required().email(),
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            password: Yup.string().required(),
            passwordConfirmation: Yup.string()
                .required()
                .oneOf([Yup.ref('password')], 'As senhas não batem'),
        }),
        onSubmit: (values, formikHelpers) => {
            dispatch(register(values))
                .then(() => history.push('/inicio'))
                .finally(() => formikHelpers.setSubmitting(false))
        },
    })

    return (
        <>
            {JSON.stringify(authState)}

            <form onSubmit={formik.handleSubmit}>
                <AppInput
                    type="email"
                    placeholder="e-mail"
                    aria-label="e-mail"
                    icon={envelopeSimpleDuotone}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                    <FormInputMessage message={formik.errors.email} />
                )}

                <AppInput
                    type="text"
                    placeholder="nome"
                    aria-label="nome"
                    icon={userCircleDuotone}
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <FormInputMessage message={formik.errors.firstName} />
                )}

                <AppInput
                    type="text"
                    placeholder="sobrenome"
                    aria-label="sobrenome"
                    icon={userCircleDuotone}
                    {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <FormInputMessage message={formik.errors.lastName} />
                )}

                <AppInput
                    type="password"
                    placeholder="senha"
                    aria-label="senha"
                    icon={keyDuotone}
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                    <FormInputMessage message={formik.errors.password} />
                )}

                <AppInput
                    type="password"
                    placeholder="confirmar senha"
                    aria-label="confirmar senha"
                    icon={keyDuotone}
                    {...formik.getFieldProps('passwordConfirmation')}
                />
                {formik.touched.passwordConfirmation &&
                    formik.errors.passwordConfirmation && (
                        <FormInputMessage
                            message={formik.errors.passwordConfirmation}
                        />
                    )}

                <SimpleButton
                    className="form-btn"
                    isLoading={formik.isSubmitting}
                >
                    Criar conta
                </SimpleButton>
            </form>
        </>
    )
}

export default FormRegister
