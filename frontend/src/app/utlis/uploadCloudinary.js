const upload_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();

  uploadData.append('file', file);
  uploadData.append('upload_preset', upload_preset); // Use public environment variable
  uploadData.append('cloud_name', cloud_name);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
    method: 'POST',
    body: uploadData,
  });

  if (!res.ok) {
    throw new Error('Failed to upload image to Cloudinary');
  }

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
