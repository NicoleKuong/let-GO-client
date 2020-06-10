import React, { Component } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

export default class ImageUploadContainer extends Component {
  // specify upload params and url for your files
  getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    // console.log("body", body);
    body.append("file", file);
    body.append("upload_preset", "nkuong");

    return {
      url: "https://api.cloudinary.com/v1_1/dwkbnuezz/image/upload",
      body,
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
  };

  // called every time a file's `status` changes
  handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  handleSubmit = async (files, allFiles) => {
    const responses = files.map((f) => JSON.parse(f.xhr.responseText));
    const urls = responses.map((response) => {
      return response.url;
    });
    console.log("cloud urls", urls);
    await this.props.setImgUrls(urls);
    allFiles.forEach((f) => f.remove());
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
