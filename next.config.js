const withImages = require('next-images');
module.exports = withImages({
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    },
});


