import React from 'react'
import SearchBar from './SearchBar'
import discogs from '../components/apis/discogs'


class App extends React.Component {
  onTermSubmit = (term) => {
    console.log(term)
    discogs.get('/database/search', {
      params: {
        query: term
      }
    })

  }



  render() {
   return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
    </div>)
  }
}

export default App
