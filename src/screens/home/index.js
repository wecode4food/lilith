import React from "react";
import '../../App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import * as cons from "../../res/values/constants";
import * as firebase from 'firebase';
const styles = {
  well: {
    background: `#e8e9eb`,
    boxShadow: `-2px 6px 23px 1px  rgba(0,0,0,0.75)`,
  },
  but:{

    color: `#fff`,
  }
};
var config = {
    apiKey: "AIzaSyCoEZjpQrQNdzpPM_WN64-2ygQOp0rV02A",
    authDomain: "adan-is-aive.firebaseapp.com",
    databaseURL: "https://adan-is-aive.firebaseio.com",
    projectId: "adan-is-aive",
    storageBucket: "adan-is-aive.appspot.com",
    messagingSenderId: "738898624761"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config)

}
let results;
let listS = [];

// import 'typeface-roboto';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataKeys: [],
            listItem: [],
            dummy_bool: false,
            getFckanSht: {},
            dummy: '1'
        };
        for (let i = 0; i < this.state.dataKeys.length; i++) {
            this.assignList(this.state.dataKeys[i]);
        }
        console.log(this.state.dataKeys);
    }

    componentWillMount() {
        firebase.database().ref('/reto/').on("value", snapshot => {
            results = snapshot.val(); //siempre es snapshot.val() para tomar el json de la ruta
            console.log(snapshot.val());
            console.log(results)//esto es para mostrar
            let xd = Object.getOwnPropertyNames(results);
            this.setState({dataKeys: xd, getFckanSht: results});
            console.log(this.state.dataKeys);
            console.log(this.state.getFckanSht);
            let bad = this.state.getFckanSht;
            let x;
            for (x in bad) {
                console.log(bad[x]);
                listS.push(bad[x]);

            }
            console.log(listS);
        });

        this.setState({dummy_bool: false})

    }

    assignList() {
            for (let i = 0; i < this.state.dataKeys.length; i++) {
                firebase.database().ref('/post/' + this.state.dataKeys[i].toString() + '/').on("value", snapshot => {
                    listS.push(snapshot.val());
                });
            }
    }

    refresh(){
        setTimeout(() => {this.setState({dummy: 1})}, 100)
    }

    componentDidMount() {

        console.log(this.state.listItem);
        this.refresh();

    }


    render() {

        const {listItem} = this.state;

        return (
            <div>
                <main id="home_content">
                <h1 className="title_postulados">Postulados</h1>

                {listS.map((item, index) => {
                    return (
                        <Card className={this.props.card} style={styles.well} className="card" id={"post".concat((index+1).toString())}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="imagen x"
                                    className={this.props.media}
                                    height="140"
                                    image={listS[index].srchelp}
                                    title="imagen x"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {listS[index].titulo}
                                    </Typography>
                                    <Typography component="p">
                                        {listS[index].descripcion}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="card_button_container">
                                <Button component={Link} to={`/reto/${this.state.dataKeys[index]}`} variant="contained" color="primary">
                                    Postular
                                </Button>

                            </CardActions>
                        </Card>
                    );
                })}
                </main>
            </div>
        )
            ;

    }
}

export default Home;
