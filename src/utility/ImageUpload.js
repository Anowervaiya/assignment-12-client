import axios from "axios";


const  ImageUpload = async(image)=> {
  const formdata = new FormData()
  formdata.append('image',image)

 const { data } = await axios.post(
   `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_apikey}`,
   formdata
 );

  return data.data?.display_url;
  
}

export default ImageUpload;