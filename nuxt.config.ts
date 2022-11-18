export default {

    target: 'server',

    head: {
        title: 'Eimer Archive',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    router: {
        middleware: ['auth']
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        ['cookie-universal-nuxt', {alias: 'cookies'}],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    env: {
        BASE_URL: 'http://localhost:3000',
        API_URL: 'http://localhost:8080'
    },

    publicRuntimeConfig: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
        apiUrl: process.env.API_URL || 'http://localhost:8080'
    },

    axios: {
        // set default axios url
        baseURL: 'http://localhost:8080',
        // default config
        headers: {
            common: {
                Accept: 'application/json'
            }
        }
    }
}
