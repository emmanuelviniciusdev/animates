import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    RouteProps,
    Switch,
} from 'react-router-dom'
import Loading from '../views/Loading'

const Home = lazy(() => import('../views/Home'))
const Login = lazy(() => import('../views/Login'))
const CriarConta = lazy(() => import('../views/CriarConta'))
const EsqueciMinhaSenha = lazy(() => import('../views/EsqueciMinhaSenha'))
const Inicio = lazy(() => import('../views/Inicio'))
const Match = lazy(() => import('../views/Match'))
const Adocao = lazy(() => import('../views/Adocao'))

type PrivateRouteType = Partial<RouteProps & { redirectionPath: string }>

function PrivateRoute({
    redirectionPath = RoutePaths.LOGIN,
    ...rest
}: PrivateRouteType) {
    const userNotLoggedIn = !localStorage.getItem('token')

    if (userNotLoggedIn) return <Redirect to={redirectionPath} />

    return <Route {...rest} />
}

function Routes() {
    return (
        <>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path={RoutePaths.HOME} component={Home} />
                        <Route path={RoutePaths.LOGIN} component={Login} />
                        <Route
                            path={RoutePaths.CRIAR_CONTA}
                            component={CriarConta}
                        />
                        <Route
                            path={RoutePaths.RECUPERAR_SENHA}
                            component={EsqueciMinhaSenha}
                        />
                        <PrivateRoute
                            path={RoutePaths.INICIO}
                            component={Inicio}
                        />
                        <PrivateRoute
                            path={RoutePaths.MATCH}
                            component={Match}
                        />
                        <PrivateRoute
                            path={RoutePaths.ADOCAO}
                            component={Adocao}
                        />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export const RoutePaths = {
    HOME: '/',
    LOGIN: '/login',
    CRIAR_CONTA: '/criar-conta',
    RECUPERAR_SENHA: '/recuperar-senha',
    INICIO: '/inicio',
    MATCH: '/match',
    ADOCAO: '/adocao',
    MENSAGENS: '/mensagens',
}

export default Routes
