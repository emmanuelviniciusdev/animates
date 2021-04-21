import { RouteProps } from 'react-router'

export type Modes = 'public' | 'auth' | 'private'

export type AppRoute = {
    /**
     * Redirection path for when the route mode is 'auth'.
     */
    redirectionPathForAuth?: string

    /**
     * Redirection path for when the route mode is 'private'.
     */
    redirectionPathForPrivate?: string

    /**
     * Indicates the route's mode.
     * - When the mode is 'auth' and the user is authenticated, redirects the user for 'redirectionPathForAuth'.
     * - When the mode is 'private' and the user is not authenticated, redirects the user to 'redirectionPathForPrivate'.
     * - When the mode is 'public', no redirections are made.
     */
    mode: Modes
}

export type Props = RouteProps & AppRoute
