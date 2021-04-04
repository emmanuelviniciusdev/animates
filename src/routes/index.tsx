import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from '../views/Loading'

const Home = lazy(() => import('../views/Home'))
const Login = lazy(() => import('../views/Login'))
const CriarConta = lazy(() => import('../views/CriarConta'))
const EsqueciMinhaSenha = lazy(() => import('../views/EsqueciMinhaSenha'))
const Inicio = lazy(() => import('../views/Inicio'))
const Match = lazy(() => import('../views/Match'))

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

                        <Route path="/inicio" component={Inicio} />
                        <Route path="/match" component={Match} />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default Routes
