import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../views/Home'))

function Routes() {
    return (
        <>
            <Router>
                <Suspense fallback={<p>loading...</p>}>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default Routes
