import { 
    createStackNavigator 
} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetails'

const SearchStackNavigation = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: "Rechercher"
        }
    }
}) 

export default createAppContainer(SearchStackNavigation)