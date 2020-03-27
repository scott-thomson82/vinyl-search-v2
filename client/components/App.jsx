import React from 'react'
import SearchBar from './SearchBar'
import discogs from '../components/apis/discogs'


class App extends React.Component {
  onTermSubmit = async term => {
    const response = await discogs.get('/database/search', {
      params: {
        query: term
      }
    })
      console.log(response.data.results)
  }



  render() {
   return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
    </div>)
  }
}

export default App
