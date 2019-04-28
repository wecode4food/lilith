import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import * as firebase from 'firebase';


let results, results_post;
let listS = [];
let listS_post = [];
class Retos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataKeys: [],
            listItem1: [],
            dummy_bool1: false,
            getFckanSht1: {},
            object_lov1: {},
            listItem: [],
            dummy_bool: false,
            getFckanSht: {},
            object_lov: {},
            data: null,
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
        const {match: {params}} = this.props;

        firebase.database().ref('/post/').on("value", snapshot => {
            results_post = snapshot.val(); //siempre es snapshot.val() para tomar el json de la ruta
            console.log(snapshot.val());
            console.log(results)//esto es para mostrar
            let xd = Object.getOwnPropertyNames(results_post);
            this.setState({dataKeys1: xd, getFckanSht1: results});
            console.log(this.state.dataKeys1);
            console.log(this.state.getFckanSht1);
            let bad = this.state.getFckanSht1;
            let x;
            for (x in bad) {
                console.log(bad[x]);
                if (bad[x].reto === this.state.getFckanSht[params.id].titulo) {
                    listS_post.push(bad[x]);
                }
            }
            console.log(listS_post);
        });

        this.setState({dummy_bool: false})

    }

    assignList() {
        for (let i = 0; i < this.state.dataKeys.length; i++) {
            firebase.database().ref('/reto/' + this.state.dataKeys[i].toString() + '/').on("value", snapshot => {
                listS.push(snapshot.val());
            });
        }
    }

    refresh() {
        setTimeout(() => {
            this.setState({dummy: 1})
        }, 100)
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        firebase.database().ref(`/reto/${params.id}`).on("value", snapshot => {
            results = snapshot.val(); //siempre es snapshot.val() para tomar el json de la ruta
            console.log(snapshot.val());
            console.log(results)//esto es para mostrar
            this.setState({object_lov: results});

        });
    }


    render() {

        const {listItem} = this.state;

        return (
            <div>
                <main id="home_content">
                    <h1 className="title_postulados">{this.state.object_lov.titulo}</h1>
                    {listS_post.map((item, index) => {
                        return (
                            <Card className="card"
                                  id={"post".concat((index + 1).toString())}>

                                <CardMedia
                                    component="img"
                                    alt="imagen x"
                                    className={this.props.media}
                                    height="140"
                                    image={listS_post[index].srchelp}
                                    title="imagen x"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {listS_post[index].titulo}
                                    </Typography>
                                    <Typography component="p">
                                        {listS_post[index].descripcion}
                                    </Typography>
                                </CardContent>

                                <CardActions className="card_button_container">
                                    <Button component={Link} to={`/post/${this.state.dataKeys[index]}`}
                                            variant="contained" color="primary">
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

export default Retos;