import React from 'react';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Container } from '@material-ui/core';
import './App.css';
import './App.scss';
function App() {
  return (
    <Container width="sm">
      <InputSelect />
      <InputText />
    </Container>
  );
}

class InputSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'pr'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="tamanho">
        <InputLabel id="label">Estado</InputLabel>
          <Select value={this.state.value} onChange={this.handleChange}>
            <MenuItem value="sc">Santa Catarina</MenuItem>
            <MenuItem value="pr">Paraná</MenuItem>
          </Select>
      </div>
    );
  }
}


class InputText extends React.Component{
  render() {
      return (
        <FormControl className="tamanho">
          <InputLabel htmlFor="my-input">E-mail</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">Nós nunca iremos compartilhar seu e-mail.</FormHelperText>
        </FormControl>
      )
  }
}
export default App;
