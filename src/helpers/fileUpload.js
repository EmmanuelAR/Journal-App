import { async } from "@firebase/util";

export const fileUpload = async (file) => {
  // if (!file) throw new Error("No hay archivo.");

  if (!file) return null;

  const cloudUrl = "https://api.cloudinary.com/v1_1/damar3clg/image/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, { method: "POST", body: formData });
    if (!resp.ok) throw new Error("No se puede subir la imagen.");
    const cloudResp = await resp.json();
    return cloudResp;
  } catch (error) {
    // console.log(error);
    // throw new Error(error.message);
    return null;
  }
};
