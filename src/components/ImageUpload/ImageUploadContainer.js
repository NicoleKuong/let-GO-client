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

import React, { Component } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { connect } from "react-redux";
import { createImage } from "../../actions/image";

class ImageUploadContainer extends Component {
  state = {
    // uploadedFile: null,
    imageUrl: []
  };

  // specify upload params and url for your files
  getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    console.log("body", body);
    body.append("file", file);
    body.append("upload_preset", "nkuong");

    return {
      url: "https://api.cloudinary.com/v1_1/dwkbnuezz/image/upload",
      body,
      headers: { "X-Requested-With": "XMLHttpRequest" }
    };
  };

  // called every time a file's `status` changes
  handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  handleSubmit = (files, allFiles) => {
    // event.preventDefault();
    const responses = files.map(f => JSON.parse(f.xhr.responseText));
    const urls = responses.map(response => {
      return response.url;
    });
    console.log("urls", urls);
    this.setState({ imageUrl: [urls] });
    console.log("local", this.state.imageUrl);
    this.props.dispatch(
      createImage({
        imageUrl: this.state.imageUrl
        // itemId: this.props.match.params.itemId
      })
    );
    allFiles.forEach(f => f.remove());
  };

  render() {
    return (
      <Dropzone
        getUploadParams={this.getUploadParams}
        onChangeStatus={this.handleChangeStatus}
        onSubmit={this.handleSubmit}
        accept="image/*"
      />
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN image Upload", state);
  return {
    users: state.user,
    items: state.items
  };
};

export default connect(mapStateToProps)(ImageUploadContainer);
