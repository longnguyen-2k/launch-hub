/** @type {import('next').NextConfig} */
const BASE_URL = process.env.API_BASE_URL;
const configUrl = {
    baseUrl: `${BASE_URL}`,
    accounts:{
        endpoint:`${BASE_URL}/accounts`,
        login:{
            endpoint:`${BASE_URL}/accounts/login`
        },
        signUp:{
            endpoint:`${BASE_URL}accounts/signup}`
        }
    }
}
const nextConfig = {
    env:{
        configUrl:configUrl
    }
}

module.exports = nextConfig
