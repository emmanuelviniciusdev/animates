import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import GlobalStyle from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/**
 * Enable API mocking requests
 */
const enableMocksForAlphaRelease = true

if (process.env.NODE_ENV === 'development' || enableMocksForAlphaRelease) {
    const { worker } = require('./mocks/browser')
    worker.start()
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '1300px',
                            // background: 'gray',
                            position: 'relative',
                        }}
                    >
                        <ToastContainer />

                        <Routes />
                    </div>
                </div>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
