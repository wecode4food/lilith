import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from "@material-ui/core/es/Typography/Typography";
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import * as cons from '../../res/values/constants';
import Dropzone from "react-dropzone";
import * as firebase from 'firebase';


var storageRef = firebase.storage().ref();

class Admretos extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          name: '',
          des: '',
          srcimg: '',
          date_start:'',
          date_end: ''


        };
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
                    this.setState({srcimg: downloadURL});
                });
            }
        );
    }

    handleChange = name => event => {
      console.log(event.target.value);
        this.setState({ [name]: event.target.value });
    };


    render() {

        return (
            <div id="cont_crear_retos">
            <Card  id="register_card">
                <CardContent>
                    <form>
                        <h2>Formulario de Reto</h2>
                        <TextField
                            id="name"
                            label="Nombre del reto"
                            style={{margin: 5}}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="des"
                            label="Descripción"
                            multiline
                            style={{margin: 5}}
                            value={this.state.des}
                            onChange={this.handleChange('des')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="date-start"
                            type='date'
                            label="Fecha de Comienzo"
                            style={{margin: 5}}
                            value={this.state.date_start}
                            onChange={this.handleChange('date_start')}
                            margin="normal"
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />
                        <br/>
                        <TextField
                          id="date-end"
                          label="Fecha de termino"
                          type="date"
                            defaultValue="2017-05-24"

                            value={this.state.date_end}
                            onChange={this.handleChange('date_end')}
                            margin="normal"

                          InputLabelProps={{
                            shrink: true,
                          }}
                          />
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
                                            <Card id="register_card">
                                                <CardContent>
                                                    <p>Arrastre y suelte una foto para subirla, también puede darle click para seleccionarla</p>
                                                    <Typography>
                                                        {this.state.upload_progress}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        }
                                    </div>
                                )
                            }}
                        </Dropzone>
                    </form>
                </CardContent>
                <CardActions className="card_button_container">

                    <Button variant="contained" color="primary" style={{padding: 10}} onClick={cons.register(false,this.state.cedu, this.state.name, this.state.correo, this.state.contra, this.state.barrio)}>

                        <Typography variant="button">
                            Crear Reto
                        </Typography>
                    </Button>
                </CardActions>
            </Card>

              </div>

        );
    }


}

export default Admretos;
