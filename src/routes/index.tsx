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

function PrivateRoute({ redirectionPath = '/', ...rest }: PrivateRouteType) {
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
                        <Route exact path="/" component={Home} />

                        <Route path="/login" component={Login} />
                        <Route path="/criar-conta" component={CriarConta} />
                        <Route
                            path="/recuperar-senha"
                            component={EsqueciMinhaSenha}
                        />

                        <PrivateRoute path="/inicio" component={Inicio} />
                        <PrivateRoute path="/match" component={Match} />
                        <PrivateRoute path="/adocao" component={Adocao} />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default Routes
