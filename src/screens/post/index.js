import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';

import * as cons from '../../res/values/constants'
// import 'typeface-roboto';

let results = [];
var storageRef = firebase.storage().ref();
class Post extends React.Component {
    /*function get_post_desc() {
      return (

      );

  }*/
    constructor(props) {
        super(props);
        cons.serverStart();
        this.state = {
            multiline: '',
            name_des: '',
            object_lov: {},
            data: null
        }
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        firebase.database().ref(`/post/${params.id}`).on("value", snapshot => {
            results = snapshot.val(); //siempre es snapshot.val() para tomar el json de la ruta
            console.log(snapshot.val());
            console.log(results)//esto es para mostrar
            this.setState({object_lov: results});

        });
    }


    onImageDrop1(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload1(files[0], this);
    }

    handleImageUpload1(file, thisl) {
        var metadata = {
            contentType: 'image/jpeg',
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log('Upload is ' + progress + '% done');
                thisl.setState({upload_progress: "Upload progress: "+progress+"%"});
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            function (error) {
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
            function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                });
            }
        );
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        cons.webSocket.on('result', (arraytemp) => {
            this.setState({data: arraytemp});
        });
        cons.webSocket.on('result-item', (arraytemp) => {
            this.setState({keysThings: arraytemp});
        });
        return (


            <div className="post">
                <div class="post_description"><h3>{this.state.object_lov.titulo}</h3></div>
                <p>{this.state.object_lov.descripcion}</p>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Post"
                    multiline
                    rowsMax="8"
                    value={this.state.multiline}
                    onChange={this.handleChange('multiline')}
                    className={this.props.textField}
                    margin="normal"
                    helperText="hello"
                    variant="outlined"
                />

                {/*<Typography>{this.state.multiline}</Typography>*/}
            </div>


        );


    }
}

export default Post;
