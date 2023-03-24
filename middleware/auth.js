export default async function (context) {

    const token = context.app.$cookies.get('user-cookie');

    try {
        const user = await context.app.$axios.post('api/info', {"token": token});

        if (user.data.error === undefined) {
            await context.store.dispatch('auth/fetchUser', {
                token: token,
                'user': user.data
            })
        }

        console.log(user.data)

        // TODO: make different auth levels for mods, admin premium users only etc
        if (routeOption(context.route, 'auth', true) && !context.store.state.auth.user.roles.includes('ROLE_ADMIN')) {
            return context.redirect('/signin')
        }
    } catch (e) {
        console.error("Error: ", e);
    }
}

function routeOption(route, key, value) {
    return route.matched.some((m) => {
        if (process.client) {
            return Object.values(m.components).some(
                (component) => component.options && component.options[key] === value
            )
        } else {
            return Object.values(m.components).some((component) =>
                Object.values(component._Ctor).some(
                    (ctor) => ctor.options && ctor.options[key] === value
                )
            )
        }
    })
}