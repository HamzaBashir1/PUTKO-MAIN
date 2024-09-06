// utils/uploadCloudinary.js

const uploadImageToCloudinary = async (file) => {
  const upload_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;
  const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME;

  if (!upload_preset || !cloud_name) {
    throw new Error('Cloudinary credentials are not set.');
  }

  const uploadData = new FormData();
  uploadData.append('file', file);
  uploadData.append('upload_preset', upload_preset);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
    method: 'POST',
    body: uploadData,
  });

  if (!res.ok) {
    const errorText = await res.text(); // Read error details from the response
    throw new Error(`Failed to upload image to Cloudinary: ${errorText}`);
  }

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
