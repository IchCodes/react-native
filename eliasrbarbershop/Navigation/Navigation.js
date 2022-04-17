import { 
    createStackNavigator 
} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../components/Search'

const SearchStackNavigation = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    }
}) 

export default createAppContainer(SearchStackNavigation)