import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Form, Input, Label, FormGroup, Col, Button } from 'reactstrap';
import './App.css';
import ListPlayers from './components/ListPlayers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      nick: '',
      number: '',
      team: '',
      position: '',
      sport: '',
      goalsMade: '',
      goalsReceived: '',
      totalPoints: 0,
      bestPlayer: '',
      bestPoints: 0

    }
    this.onChange = this.onChange.bind(this);
    this.guardar = this.guardar.bind(this);
    this.bestPlayer = this.bestPlayer.bind(this);

  }
  

  guardar(e){
  e.preventDefault();
  let newPlayer = {
        nick: '',
        number: '',
        team: '',
        sport: '',
        position: '',
        goalsMade: '',
        goalsReceived: '',
        totalPoints: 0
  }

  if(this.state.nick !== '' && 
  this.state.number !== '' &&
  this.state.team !== '' &&
  this.state.position !== '' &&
  this.state.sport !== '' &&
  this.state.goalsMade !=='' &&
  this.state.goalsReceived !== ''){
    newPlayer.nick = this.state.nick;
    newPlayer.number = this.state.number;
    newPlayer.team = this.state.team;
    newPlayer.position = this.state.position;
    newPlayer.sport = this.state.sport;
    newPlayer.goalsMade = this.state.goalsMade;
    newPlayer.goalsReceived = this.state.goalsReceived;
    newPlayer.totalPoints = this.totalPoins(newPlayer);

    let newPlayers = this.state.players;
    newPlayers.push(newPlayer);
  this.setState({
    ...this.state,
    players: newPlayers,
    id: '',
    nick: '',
    number: '',
    team: '',
    sport: '',
    position: '',
    goalsMade: '',
    goalsReceived: '',
    totalPoints: 0
  })

  }else{
    alert("The data entered is not correct, please try again")
    console.log('error datos no validos');
  }

}

  onChange(e){
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  bestPlayer(){
    let points = 0;
    let bestPoints = 0;
    let bestPlayer = '';
    this.state.players.forEach(player => {
      points = this.totalPoins(player);
        if(points > bestPoints){
          bestPlayer = player.nick;
          bestPoints = points;
        }
        this.setBestplayer(bestPlayer,points);
        console.log(`the best player is ${bestPlayer} with ${bestPoints} points` )
      
      })
    }
    totalPoins(player) {
      var points = 0;
      if(player.sport === 'Handball'){
        var InitialRatingPoints = 0;
        var goalsMadePoints = 0;
        var goalReceivedPoints = 0;
        if(player.position === 'F'){
          InitialRatingPoints = 20;
          goalsMadePoints = 1;
          goalReceivedPoints = 1;
        }else{
          InitialRatingPoints = 50;
          goalsMadePoints = 5;
          goalReceivedPoints = 2;
        }

        points = InitialRatingPoints + 
        (goalsMadePoints * parseInt(player.goalsMade,10)) - 
        (goalReceivedPoints * parseFloat(player.goalsReceived,10))
        return points
    }
  }

setBestplayer = (bestPlayer, bestPoints) =>{
  if(bestPlayer !== null && bestPoints !== null){
    this.setState({
      ...this.state,
      bestPlayer : bestPlayer,
      bestPoints: bestPoints
    })
  }
}

showBestPlayer = () =>{
  if(this.state.bestPlayer !== undefined && this.state.bestPoints !== 0){
    return (
      <React.Fragment>
        <div>
          <h1>The best player is {this.state.bestPlayer} with {this.state.bestPoints} points!!!!</h1>
        </div>
      </React.Fragment>
    )
  }else{
    
    return(<span></span>)
  }
}
  render() {

    return (
      <div className="App container">
        <div>
          {this.showBestPlayer()}
        <Button color="success" onClick={this.bestPlayer}>The Best Player is...</Button>
        </div>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <h1>Players Registration</h1>

            <Form onSubmit={this.guardar}>
              <FormGroup>
                <Label>Nick Name</Label>
                <Input type="text" name="nick" value={this.state.nick} onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Number</Label>
                <Input type="number" name="number" value={this.state.number} onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Team</Label>
                <Input type="text" name="team" value={this.state.team} onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Sport </Label>
                <select name ="sport" value={this.state.sport} onChange={this.onChange}>
                  <option value="Handball">Handball </option>
                  <option value="Basketball">Basketball </option>
                </select>
              </FormGroup>
              <FormGroup>
                <Label>Position </Label>
                <select name="position" value={this.state.position} onChange={this.onChange}>
                  <option value="G">Goalkeeper </option>
                  <option value="F">Field player </option>
                </select>
              </FormGroup>
              <FormGroup>
                <Label>Goals Made</Label>
                <Input type="number" name="goalsMade" value={this.state.goalsMade} onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Goals Received</Label>
                <Input type="number" name="goalsReceived" value={this.state.goalsReceived} onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Button color="success">Save</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <div>
          <ListPlayers
          players = {this.state.players}
          />
        </div>

      </div>

    );
  }
}
