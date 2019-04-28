import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import ReactNotifications from 'react-browser-notifications';
import Dropzone from "react-dropzone";
import * as firebase from 'firebase';

import * as cons from '../../res/values/constants'


var storageRef = firebase.storage().ref();
// import 'typeface-roboto';
class TestPage extends React.Component {
    /*function get_post_desc() {
      return (

      );

  }*/
    constructor(props) {
        super(props);
        this.state = {
            multiline: ''
        }
        this.showNotifications = this.showNotifications.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    showNotifications() {
        // If the Notifications API is supported by the browser
        // then show the notification
            if (this.n.supported()) this.n.show();
    }

    handleClick(event) {
        // Do something here such as
        // console.log("Notification Clicked") OR
        // window.focus() OR
        // window.open("http://www.google.com")

        // Lastly, Close the notification
        this.n.close(event.target.tag);
    }

    onImageDrop1(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload1(files[0]);
    }

    handleImageUpload1(file) {
        var metadata = {
            contentType: 'image/jpeg',
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            function(error) {
                // Errors list: https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            function() {
                // Upload completed successfully, now we can get the download URL
                var downloadURL = uploadTask.snapshot.downloadURL;
            }
        );
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {

        return (

            <div className="post">
                <Button variant="contained" onClick={() => (cons.ServerTest)}>
                    <Typography>
                        Texto
                    </Typography>
                </Button>
                <ReactNotifications
                    onRef={ref => (this.n = ref)} // Required
                    title="Hello" // Required
                    body="This is the body"
                    icon="icon.png"
                    tag="abcdef"
                    onClick={event => this.handleClick(event)}
                />

                <Button onClick={this.showNotifications}>
                    Notify Me!
                </Button>
                <br/>
                <Dropzone
                    onDrop={this.onImageDrop1.bind(this)}
                    accept="image/*"
                    multiple={false}>
                    {({getRootProps, getInputProps}) => {
                        return (
                            <div
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                {
                                    <p>Drop a file (or click here) to upload as the image for the dish.</p>
                                }
                            </div>
                        )
                    }}
                </Dropzone>
            </div>

        );
    }
}

export default TestPage;