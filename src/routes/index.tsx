import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import Loading from '../views/Loading'
import AppRoute from '../components/AppRoute'

const Home = lazy(() => import('../views/Home'))
const Login = lazy(() => import('../views/Login'))
const CriarConta = lazy(() => import('../views/CriarConta'))
const EsqueciMinhaSenha = lazy(() => import('../views/EsqueciMinhaSenha'))
const Inicio = lazy(() => import('../views/Inicio'))
const Match = lazy(() => import('../views/Match'))
const Adocao = lazy(() => import('../views/Adocao'))
const Mensagens = lazy(() => import('../views/Mensagens'))
const Chat = lazy(() => import('../views/Chat'))
const ConfiguracoesConta = lazy(() => import('../views/ConfiguracoesConta'))
const ConfiguracoesPerfil = lazy(() => import('../views/ConfiguracoesPerfil'))
const Pagina404 = lazy(() => import('../views/Pagina404'))

function Routes() {
    return (
        <>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <AppRoute
                            exact
                            path={RoutePaths.HOME}
                            component={Home}
                        />
                        <AppRoute
                            mode="auth"
                            path={RoutePaths.LOGIN}
                            component={Login}
                        />
                        <AppRoute
                            mode="auth"
                            path={RoutePaths.CRIAR_CONTA}
                            component={CriarConta}
                        />
                        <AppRoute
                            mode="auth"
                            path={RoutePaths.RECUPERAR_SENHA}
                            component={EsqueciMinhaSenha}
                        />
                        <AppRoute
                            mode="private"
                            path={RoutePaths.INICIO}
                            component={Inicio}
                        />
                        <AppRoute
                            mode="private"
                            path={RoutePaths.MATCH}
                            component={Match}
                        />
                        <AppRoute
                            mode="private"
                            path={RoutePaths.ADOCAO}
                            component={Adocao}
                        />
                        <AppRoute
                            mode="private"
                            path={RoutePaths.MENSAGENS}
                            component={Mensagens}
                        />
                        <AppRoute
                            mode="private"
                            path={RoutePaths.CHAT()}
                            component={Chat}
                        />
                        <AppRoute
                            mode="private"
                            path={RoutePaths.CONFIGURACOES_DE_CONTA}
                            component={ConfiguracoesConta}
                        />
                        <AppRoute
                            mode="private"
                            path={RoutePaths.CONFIGURACOES_DE_PERFIL}
                            component={ConfiguracoesPerfil}
                        />
                        <AppRoute path="*" component={Pagina404} />
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
    CHAT: (id: string | number = ':id') => `/chat/${id}`,
    CONFIGURACOES_DE_CONTA: '/configuracoes-de-conta',
    CONFIGURACOES_DE_PERFIL: '/configuracoes-de-perfil',
}

export default Routes
