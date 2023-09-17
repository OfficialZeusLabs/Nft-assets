const AccountRoutes = (apiVersion, servicePath = 'account') => {
    return {
        get REGISTER() {
            return `${apiVersion}/${servicePath}/register`
        }
    }
}

export default AccountRoutes;