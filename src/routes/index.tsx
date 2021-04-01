import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from '../views/Loading'

const Home = lazy(() => import('../views/Home'))
const Login = lazy(() => import('../views/Login'))
const CriarConta = lazy(() => import('../views/CriarConta'))
const EsqueciMinhaSenha = lazy(() => import('../views/EsqueciMinhaSenha'))

function Routes() {
    return (
        <>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        {/* Autenticação */}
                        <Route path="/login" component={Login} />
                        <Route path="/criar-conta" component={CriarConta} />
                        <Route
                            path="/recuperar-senha"
                            component={EsqueciMinhaSenha}
                        />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default Routes
