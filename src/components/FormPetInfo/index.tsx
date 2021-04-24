import React from 'react'
import AppInput from '../AppInput'
import { Form, Textarea, WrapperInputCheckbox } from './styles'

function FormPetInfo() {
    return (
        <>
            <Form>
                <AppInput placeholder="nome" aria-label="nome" />
                <AppInput
                    placeholder="data de nascimento (dia/mês/ano)"
                    aria-label="data de nascimento (dia/mês/ano)"
                />
                <Textarea
                    placeholder="sobre o pet..."
                    aria-label="sobre o pet..."
                />

                {/* TODO: Customize checkboxes' color. */}
                <WrapperInputCheckbox>
                    <input type="checkbox" id="petIsOpenToRelationships" />
                    <label htmlFor="petIsOpenToRelationships">
                        meu pet está em busca de um parceiro(a)
                    </label>
                </WrapperInputCheckbox>
                <WrapperInputCheckbox>
                    <input type="checkbox" id="petIsForAdoption" />
                    <label htmlFor="petIsForAdoption">
                        o pet está para adoção
                    </label>
                </WrapperInputCheckbox>
            </Form>
        </>
    )
}

export default FormPetInfo
