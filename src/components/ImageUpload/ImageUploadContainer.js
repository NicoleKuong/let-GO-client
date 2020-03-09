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
    this.setState({ imageUrl: urls });
    console.log("local", this.state.imageUrl);

    console.log("historyyyy", this.props.history);
    this.props.dispatch(
      createImage({
        imageUrl: this.state.imageUrl,

        history: this.props.history,
        itemId: parseInt(this.props.match.params.itemId)
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
  console.log("STATE IN image Upload", state);
  return {
    users: state.user,
    items: state.items
  };
};

export default connect(mapStateToProps)(ImageUploadContainer);
