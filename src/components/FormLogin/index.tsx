import React from 'react'
import { ForgotPasswordArea, ForgotPasswordContent } from './styles'
import SimpleButton from '../SimpleButton'
import AppInput from '../../components/AppInput'
import { Icon } from '@iconify/react'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import keyDuotone from '@iconify/icons-ph/key-duotone'
import questionDuotone from '@iconify/icons-ph/question-duotone'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import FormInputMessage from '../FormInputMessage'
import { login } from '../../redux/ducks/auth'
import useThunkDispatch from '../../hooks/useThunkDispatch'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

function FormLogin() {
    const dispatch = useThunkDispatch()
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        }),
        onSubmit: (values, formikHelpers) => {
            dispatch(login(values))
                .then(() => {
                    toast.dismiss('toast-error-login')
                    history.push('/inicio')
                })
                .catch((err) => {
                    const errorMessage =
                        err.response.data.message ?? 'Ocorreu um erro'

                    toast.error(errorMessage, {
                        role: 'alert',
                        toastId: 'toast-error-login',
                    })
                })
                .finally(() => formikHelpers.setSubmitting(false))
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <AppInput
                    type="email"
                    placeholder="e-mail"
                    aria-label="e-mail"
                    icon={userCircleDuotone}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                    <FormInputMessage message={formik.errors.email} />
                )}

                <AppInput
                    type="password"
                    placeholder="senha"
                    aria-label="senha"
                    icon={keyDuotone}
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                    <FormInputMessage
                        message={formik.errors.password}
                        style={{ marginBottom: '40px' }}
                    />
                )}

                <ForgotPasswordArea>
                    <ForgotPasswordContent>
                        <Link to="/recuperar-senha">esqueci minha senha</Link>
                        <Icon icon={questionDuotone} className="icon" />
                    </ForgotPasswordContent>
                </ForgotPasswordArea>

                <SimpleButton
                    type="submit"
                    className="form-btn"
                    isLoading={formik.isSubmitting}
                >
                    Entrar
                </SimpleButton>
                <Link to="/criar-conta">
                    <SimpleButton
                        type="button"
                        btnTheme="secondary"
                        className="form-btn"
                    >
                        Criar uma conta
                    </SimpleButton>
                </Link>
            </form>
        </>
    )
}

export default FormLogin
