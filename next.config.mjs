import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        const rootDir = import.meta.url.replace(/\/[^/]+$/, '');
        config.resolve.alias['@'] = path.resolve(rootDir, 'app');
        return config;
    },
};

export default nextConfig;
