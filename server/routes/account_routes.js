const AccountRoutes = (apiVersion, servicePath = 'account') => {
    return {
        get REGISTER() {
            return `${apiVersion}/${servicePath}/register`
        },
        get FETCH_PROFILE() {
            return `${apiVersion}/${servicePath}/profile/:address`
        },
        get CREATE_PROFILE() {
            return `${apiVersion}/${servicePath}/profile/create`
        },
        get UPSERT_PROFILE() {
            return `${apiVersion}/${servicePath}/profile/upsert`
        }
    }
}

export default AccountRoutes;