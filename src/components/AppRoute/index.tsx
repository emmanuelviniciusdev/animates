import React from 'react'
import { Props } from './types'
import { RoutePaths } from '../../routes'
import { Redirect, Route } from 'react-router'

function AppRoute({
    mode = 'public',
    redirectionPathForAuth = RoutePaths.INICIO,
    redirectionPathForPrivate = RoutePaths.LOGIN,
    ...rest
}: Partial<Props>) {
    const userLoggedIn = localStorage.getItem('token')

    if (mode === 'auth' && userLoggedIn)
        return <Redirect to={redirectionPathForAuth} />

    if (mode === 'private' && !userLoggedIn)
        return <Redirect to={redirectionPathForPrivate} />

    return <Route {...rest} />
}

export default AppRoute
