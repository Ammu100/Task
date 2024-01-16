import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    },
    {
        key: 'reset-password',
        path: `${AUTH_PREFIX_PATH}/reset-password`,
        component: React.lazy(() => import('views/auth-views/authentication/reset-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    {
        key: 'dashboard.question1',
        path: `${APP_PREFIX_PATH}/dashboards/question_1`,
        component: React.lazy(() => import('views/app-views/dashboards/Question1')),
    },
    {
        key: 'dashboard.question2',
        path: `${APP_PREFIX_PATH}/dashboards/question_2`,
        component: React.lazy(() => import('views/app-views/dashboards/Question2')),
    },
    {
        key: 'dashboard.question3',
        path: `${APP_PREFIX_PATH}/dashboards/question_3`,
        component: React.lazy(() => import('views/app-views/dashboards/Question3')),
    },
    {
        key: 'dashboard.question4',
        path: `${APP_PREFIX_PATH}/dashboards/question_4`,
        component: React.lazy(() => import('views/app-views/dashboards/Question4')),
    },
    {
        key: 'dashboard.question5',
        path: `${APP_PREFIX_PATH}/dashboards/question_5`,
        component: React.lazy(() => import('views/app-views/dashboards/Question5')),
    },
    {
        key: 'dashboard.question6',
        path: `${APP_PREFIX_PATH}/dashboards/question_6`,
        component: React.lazy(() => import('views/app-views/dashboards/Question6')),
    },
    
    
    
    
    
]