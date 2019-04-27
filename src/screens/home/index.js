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
// import 'typeface-roboto';
class Home extends React.Component {

    render() {
        return (
            <div>
                <main id="home_content">
                <h1 class="title_postulados">Postulados</h1>
                <Card className={this.props.card} class="card" id="post1">
                  <CardActionArea>
                    <CardMedia

                      component="img"
                      alt="imagen x"
                      className={this.props.media}
                      height="140"
                      image="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                      title="imagen x"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Imagen x
                      </Typography>

                      <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lorem id purus consectetur tincidunt imperdiet at risus. Integer eget nunc in tortor accumsan ornare.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions class="card_button_container">
                    <Button component={Link} to="/post" variant="contained" color="primary">
                      Postular
                    </Button>

                  </CardActions>
                </Card>
                <Card className={this.props.card} class="card" id="post2">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="imagen x"
                      className={this.props.media}
                      height="140"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXMzMzPz8+RkZHLy8uTk5OWlpbDw8PIyMidnZ3GxsbBwcG1tbWYmJi6urqioqKwsLCoqKixsbFgFY5SAAADNUlEQVR4nO3XyZbjKgyAYTNjzJT3f9kWOHFcU/reRaW9+L9Fyqkj5yALBF4WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL9KiZeXL+5TX4P/et/blW5dTWZcri3b7ud/TYu6phe3qdSzjZv5HFyizcX87pD/n5J1jNaVcR11jjrO4TXt5NuLFNdsc3S6fQouzkbntt8f93+mst3WtegaFlV092u3m8yylGsKm60/TjjVpdpryiOvU3CoNq3JxvWdObzmZxVUc34JMQaZcVU+TddejdocI70vriPjNY5aqyLP4xQsD0mez/55Fftg1CaDTLmPy5aLCtWNy+Ju95GGdpPsF397zL89eFnl9lOwVHYs4zX/XPy3C2mMXPXsVcnzyScpyxr38e9/hjiLU4/iBD/KO2t4ClZjAsg86O46GQ4+NduNjHb2ilEWn9sYYnhmmJw1Y6Geu+SatlzX5RSsct8ztJfKUGlro5eZOmfYYnRTfrabxcT6CDLNNlNlAp/uq3JjUsspWLl+78TvTeEvRob5ZmQthv1rk/4zdw+ZdEfNUo7d9Q/3RblRapaewWrfPdRt/6nLUGZzsg6fNVy+1nCU2LqP41aqRLepb2t4qT1/GZ1GJ0lhrsMw1uHeREM890Rn++fVJSuznYNlHY7UZEpfZx2WMutSdJF2P2fb971UTmmyWp/j9tvcKoMU/EMvrePnwoV6qepuP2yd9kM39sM8hlhcO0YaYo72dty37ftGmPvhESw/N/fDGK+T4TYX0eNMM6ZYlb4qx5RRi6afB9PN9ZKjf3y9P477meYRLImXcaax7TIZyu4XvZJmMWZXk+HKXB0NUz7lvzkfcSHKoaw/iyglLWqUL30I9jnK+S66V28lbybnLBfHC8946FnnqveG2eflsf2ppqVmwR5vG1InG6vdi3UKlo5bnW3/IJMfhRZlrLPHLEkGV/esQpe3qu3o+avOfub5bK5blBelPZVTcJBXzNyutRua1fvHK0TwPhyX6fQKFJI3889p+q0SYb4EG+/91TZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOsP4lsa8TKp1xgAAAAASUVORK5CYII="
                      title="imagen x"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Imagen x
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lorem id purus consectetur tincidunt imperdiet at risus. Integer eget nunc in tortor accumsan ornare.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions class="card_button_container">
                    <Button component={Link} to="/post" variant="contained" color="primary">
                      Postular
                    </Button>

                  </CardActions>
                </Card>
                <Card className={this.props.card} class="card" id="post3">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="imagen x"
                      className={this.props.media}
                      height="140"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXMzMzPz8+RkZHLy8uTk5OWlpbDw8PIyMidnZ3GxsbBwcG1tbWYmJi6urqioqKwsLCoqKixsbFgFY5SAAADNUlEQVR4nO3XyZbjKgyAYTNjzJT3f9kWOHFcU/reRaW9+L9Fyqkj5yALBF4WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL9KiZeXL+5TX4P/et/blW5dTWZcri3b7ud/TYu6phe3qdSzjZv5HFyizcX87pD/n5J1jNaVcR11jjrO4TXt5NuLFNdsc3S6fQouzkbntt8f93+mst3WtegaFlV092u3m8yylGsKm60/TjjVpdpryiOvU3CoNq3JxvWdObzmZxVUc34JMQaZcVU+TddejdocI70vriPjNY5aqyLP4xQsD0mez/55Fftg1CaDTLmPy5aLCtWNy+Ju95GGdpPsF397zL89eFnl9lOwVHYs4zX/XPy3C2mMXPXsVcnzyScpyxr38e9/hjiLU4/iBD/KO2t4ClZjAsg86O46GQ4+NduNjHb2ilEWn9sYYnhmmJw1Y6Geu+SatlzX5RSsct8ztJfKUGlro5eZOmfYYnRTfrabxcT6CDLNNlNlAp/uq3JjUsspWLl+78TvTeEvRob5ZmQthv1rk/4zdw+ZdEfNUo7d9Q/3RblRapaewWrfPdRt/6nLUGZzsg6fNVy+1nCU2LqP41aqRLepb2t4qT1/GZ1GJ0lhrsMw1uHeREM890Rn++fVJSuznYNlHY7UZEpfZx2WMutSdJF2P2fb971UTmmyWp/j9tvcKoMU/EMvrePnwoV6qepuP2yd9kM39sM8hlhcO0YaYo72dty37ftGmPvhESw/N/fDGK+T4TYX0eNMM6ZYlb4qx5RRi6afB9PN9ZKjf3y9P477meYRLImXcaax7TIZyu4XvZJmMWZXk+HKXB0NUz7lvzkfcSHKoaw/iyglLWqUL30I9jnK+S66V28lbybnLBfHC8946FnnqveG2eflsf2ppqVmwR5vG1InG6vdi3UKlo5bnW3/IJMfhRZlrLPHLEkGV/esQpe3qu3o+avOfub5bK5blBelPZVTcJBXzNyutRua1fvHK0TwPhyX6fQKFJI3889p+q0SYb4EG+/91TZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOsP4lsa8TKp1xgAAAAASUVORK5CYII="
                      title="imagen x"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Imagen x
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lorem id purus consectetur tincidunt imperdiet at risus. Integer eget nunc in tortor accumsan ornare.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions class="card_button_container">
                    <Button component={Link} to="/post" variant="contained" color="primary">
                      Postular
                    </Button>

                  </CardActions>
                </Card>
                <Card className={this.props.card} class="card" id="post4">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="imagen x"
                      className={this.props.media}
                      height="140"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXMzMzPz8+RkZHLy8uTk5OWlpbDw8PIyMidnZ3GxsbBwcG1tbWYmJi6urqioqKwsLCoqKixsbFgFY5SAAADNUlEQVR4nO3XyZbjKgyAYTNjzJT3f9kWOHFcU/reRaW9+L9Fyqkj5yALBF4WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL9KiZeXL+5TX4P/et/blW5dTWZcri3b7ud/TYu6phe3qdSzjZv5HFyizcX87pD/n5J1jNaVcR11jjrO4TXt5NuLFNdsc3S6fQouzkbntt8f93+mst3WtegaFlV092u3m8yylGsKm60/TjjVpdpryiOvU3CoNq3JxvWdObzmZxVUc34JMQaZcVU+TddejdocI70vriPjNY5aqyLP4xQsD0mez/55Fftg1CaDTLmPy5aLCtWNy+Ju95GGdpPsF397zL89eFnl9lOwVHYs4zX/XPy3C2mMXPXsVcnzyScpyxr38e9/hjiLU4/iBD/KO2t4ClZjAsg86O46GQ4+NduNjHb2ilEWn9sYYnhmmJw1Y6Geu+SatlzX5RSsct8ztJfKUGlro5eZOmfYYnRTfrabxcT6CDLNNlNlAp/uq3JjUsspWLl+78TvTeEvRob5ZmQthv1rk/4zdw+ZdEfNUo7d9Q/3RblRapaewWrfPdRt/6nLUGZzsg6fNVy+1nCU2LqP41aqRLepb2t4qT1/GZ1GJ0lhrsMw1uHeREM890Rn++fVJSuznYNlHY7UZEpfZx2WMutSdJF2P2fb971UTmmyWp/j9tvcKoMU/EMvrePnwoV6qepuP2yd9kM39sM8hlhcO0YaYo72dty37ftGmPvhESw/N/fDGK+T4TYX0eNMM6ZYlb4qx5RRi6afB9PN9ZKjf3y9P477meYRLImXcaax7TIZyu4XvZJmMWZXk+HKXB0NUz7lvzkfcSHKoaw/iyglLWqUL30I9jnK+S66V28lbybnLBfHC8946FnnqveG2eflsf2ppqVmwR5vG1InG6vdi3UKlo5bnW3/IJMfhRZlrLPHLEkGV/esQpe3qu3o+avOfub5bK5blBelPZVTcJBXzNyutRua1fvHK0TwPhyX6fQKFJI3889p+q0SYb4EG+/91TZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOsP4lsa8TKp1xgAAAAASUVORK5CYII="
                      title="imagen x"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Imagen x
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lorem id purus consectetur tincidunt imperdiet at risus. Integer eget nunc in tortor accumsan ornare.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions class="card_button_container">
                    <Button component={Link} to="/post" variant="contained" color="primary">
                      Postular
                    </Button>

                  </CardActions>
                </Card>
                <Card className={this.props.card} class="card" id="post5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="imagen x"
                      className={this.props.media}
                      height="140"
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXMzMzPz8+RkZHLy8uTk5OWlpbDw8PIyMidnZ3GxsbBwcG1tbWYmJi6urqioqKwsLCoqKixsbFgFY5SAAADNUlEQVR4nO3XyZbjKgyAYTNjzJT3f9kWOHFcU/reRaW9+L9Fyqkj5yALBF4WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL9KiZeXL+5TX4P/et/blW5dTWZcri3b7ud/TYu6phe3qdSzjZv5HFyizcX87pD/n5J1jNaVcR11jjrO4TXt5NuLFNdsc3S6fQouzkbntt8f93+mst3WtegaFlV092u3m8yylGsKm60/TjjVpdpryiOvU3CoNq3JxvWdObzmZxVUc34JMQaZcVU+TddejdocI70vriPjNY5aqyLP4xQsD0mez/55Fftg1CaDTLmPy5aLCtWNy+Ju95GGdpPsF397zL89eFnl9lOwVHYs4zX/XPy3C2mMXPXsVcnzyScpyxr38e9/hjiLU4/iBD/KO2t4ClZjAsg86O46GQ4+NduNjHb2ilEWn9sYYnhmmJw1Y6Geu+SatlzX5RSsct8ztJfKUGlro5eZOmfYYnRTfrabxcT6CDLNNlNlAp/uq3JjUsspWLl+78TvTeEvRob5ZmQthv1rk/4zdw+ZdEfNUo7d9Q/3RblRapaewWrfPdRt/6nLUGZzsg6fNVy+1nCU2LqP41aqRLepb2t4qT1/GZ1GJ0lhrsMw1uHeREM890Rn++fVJSuznYNlHY7UZEpfZx2WMutSdJF2P2fb971UTmmyWp/j9tvcKoMU/EMvrePnwoV6qepuP2yd9kM39sM8hlhcO0YaYo72dty37ftGmPvhESw/N/fDGK+T4TYX0eNMM6ZYlb4qx5RRi6afB9PN9ZKjf3y9P477meYRLImXcaax7TIZyu4XvZJmMWZXk+HKXB0NUz7lvzkfcSHKoaw/iyglLWqUL30I9jnK+S66V28lbybnLBfHC8946FnnqveG2eflsf2ppqVmwR5vG1InG6vdi3UKlo5bnW3/IJMfhRZlrLPHLEkGV/esQpe3qu3o+avOfub5bK5blBelPZVTcJBXzNyutRua1fvHK0TwPhyX6fQKFJI3889p+q0SYb4EG+/91TZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOsP4lsa8TKp1xgAAAAASUVORK5CYII="
                      title="imagen x"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Imagen x
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lorem id purus consectetur tincidunt imperdiet at risus. Integer eget nunc in tortor accumsan ornare.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions class="card_button_container">
                    <Button component={Link} to="/post" variant="contained" color="primary">
                      Postular
                    </Button>

                  </CardActions>
                </Card>


                </main>

            </div>
        )
            ;

    }
}

export default Home;
