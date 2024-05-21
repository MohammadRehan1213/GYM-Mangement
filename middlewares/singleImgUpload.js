const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dmogpb0en",
    api_key: "812911183129459",
    api_secret: "5CxjyzMW4V5d2AT6_k8Y8D6zWvI",
});

const uploadSingleImageToCloudinary = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file was uploaded.' });
        }

        const dataUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(dataUrl);

        req.uploadedImageUrl = result.secure_url

        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = uploadSingleImageToCloudinary;
