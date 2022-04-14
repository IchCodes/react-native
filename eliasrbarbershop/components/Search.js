import React from 'react';
import { StyleSheet, View, Button, FlatList, Text, TextInput } from 'react-native';
import films from '../helpers/filmData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/TMDB'

class Search extends React.Component {


    constructor(props) {
        super(props)
        this.state = { films: [] }
    }

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => this.setState({films: data.results}));
    }
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput placeholder='Titre du film' style={styles.textinput} />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    main_container: {
        marginTop: 40,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search 