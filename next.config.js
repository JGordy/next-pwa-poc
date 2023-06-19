/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
    // next.js config
    dest: "public",
    register: true,
    skipWaiting: true,
});
