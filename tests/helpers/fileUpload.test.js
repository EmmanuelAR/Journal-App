import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "damar3clg",
  api_key: "577267175564787",
  api_secret: "LiaU7tIiHZ7lg_t8GoSKszpUl_k",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url.secure_url).toBe("string");

    //console.log(url);

    const segments = url.secure_url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    const cloudResp = await cloudinary.api.delete_resources(
      ["journal-app/" + imageId],
      {
        resource_type: "image",
      }
    );
  });

  test("Debe de retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
