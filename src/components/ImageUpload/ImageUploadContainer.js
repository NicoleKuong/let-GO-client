// import React, { Component, useState } from "react";
// import Dropzone from "react-dropzone";
// import axios from "axios";
// import request from "superagent";
// import "./ImageUpload.css";

// const CLOUDINARY_UPLOAD_PRESET = "nkuong";
// const CLOUDINARY_UPLOAD_URL =
//   "https://api.cloudinary.com/v1_1/dwkbnuezz/image/upload";

// export default class ImageUploadContainer extends Component {
//   state = {
//     // uploadedFile: null,
//     imageUrl: []
//   };

//   // const [image, setImage] = useState("");
//   // const [loading, setLoading] = useState(false);

//   onImageDrop = files => {
//     this.setState({
//       imageUrl: files
//     });

//     this.handleImageUpload(files);
//   };

//   handleImageUpload = files => {
//     let upload = request
//       .post(CLOUDINARY_UPLOAD_URL)
//       .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
//       .field("file", files)
//       .field("timestamp", (Date.now() / 1000) | 0);

//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }

//       if (response.body.secure_url !== "") {
//         console.log("=====", response.body);
//         this.setState({
//           imageUrl: response.body.secure_url
//         });
//       }
//     });
//   };

//   render() {
//     console.log("state in image", this.state);
//     return (
//       <form>
//         <div className="FileUpload">
//           <Dropzone onDrop={this.onImageDrop} accept="image/*" multiple={true}>
//             {({ getRootProps, getInputProps }) => {
//               return (
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />
//                   {
//                     <p className="UploadMessage">
//                       Drag an image here, or click to select image to upload.
//                     </p>
//                   }
//                 </div>
//               );
//             }}
//           </Dropzone>
//         </div>

//         <div>
//           {this.state.imageUrl === "" ? null : (
//             <div>
//               <img src={this.state.imageUrl} style={{ width: "300px" }} />
//             </div>
//           )}
//         </div>
//       </form>
//     );
//   }
// }

// // export default ImageUploadContainer;

import React, { Component, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
// import axios from "axios";

export default class ImageUploadContainer extends Component {
  state = {
    // uploadedFile: null,
    imageUrl: []
  };

  // specify upload params and url for your files
  getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    console.log("body", body);
    body.append("file", file);
    body.append("api_key", 941618776526744);
    body.append("upload_preset", "nkuong");

    return {
      url: "https://api.cloudinary.com/v1_1/dwkbnuezz/image/upload",
      body,
      headers: { "X-Requested-With": "XMLHttpRequest" }
      // }.then(response => {
      //   const data = response.data;
      //   const fileURL = data.secure_url; // You should store this URL for future references in your app
      //   console.log("url", fileURL);
      // console.log("====", response.body);
    };
  };

  // called every time a file's `status` changes
  handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  render() {
    return (
      <Dropzone
        getUploadParams={this.getUploadParams}
        // onDrop={this.onImageDrop}
        onChangeStatus={this.handleChangeStatus}
        onSubmit={this.handleSubmit}
        accept="image/*"
      />
    );
  }
}
