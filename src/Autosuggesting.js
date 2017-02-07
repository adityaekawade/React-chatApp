


// AUTO SUGGESTIONS 

 //https://github.com/moroshko/react-autosuggest
//http://codepen.io/collection/DkkYaQ/
//http://react-autosuggest.js.org/
//https://github.com/moroshko/react-autosuggest#installation
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import Autosuggest from 'react-autosuggest';
import themeable from 'react-themeable';


const languages = [
  {
    name: 'C',
    year: 1972,
    imgsrc:'./arsenal.jpg'
  },
    {
    name: 'Java',
    year: 2012
  },
    {
    name: 'C++',
    year: 2012
  },
    {
    name: 'Python',
    year: 2012
  },
    {
    name: 'Html',
    year: 2012
  },
    {
    name: 'Css',
    year: 2012
  },
    {
    name: 'JS',
    year: 2012
  },
    {
    name: 'REACT',
    year: 2012
  },
    {
    name: 'NODE',
    year: 2012
  },
  {
    name: 'Elm',
    year: 2012
  },
  
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};


const getSuggestionValue = suggestion => suggestion.name ;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}{suggestion.imgsrc}
    {suggestion.year}
    <img src="{suggestion.imgsrc}" />

  </div>
);

class Autosuggesting extends React.Component {
  constructor() {
    super();

    
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search or start new chat',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}


export default Autosuggesting;