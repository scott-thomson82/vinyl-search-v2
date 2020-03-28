import React from 'react'
import SearchBar from './SearchBar'
import discogs from '../components/apis/discogs'
import RecordList from './RecordList'



class App extends React.Component {
  state = { records: [] }

  onTermSubmit = async term => {
    const response = await discogs.get('/database/search', {
      params: {
        query: term,
        

      }
    })
    this.setState({ records: response.results[0].thumb })
      
  }



  render() {
   return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <RecordList records={this.state.records}/>
    </div>)
  }
}

export default App
