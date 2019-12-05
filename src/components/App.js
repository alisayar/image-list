import React from 'react';
import axios from 'axios';
import SearchInput from './Searchinput';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async (entry) => {
       const response = await axios.get(`https://pixabay.com/api/?key=14521668-2c8caba2b93355e441c16ca14&q=${entry}&image_type=photo`) //api'ye istek attık
        this.setState({images:response.data.hits})
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;