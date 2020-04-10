import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Cases from './pages/cases';
import Details from './pages/details';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Cases" component={Cases} />
                <AppStack.Screen name="Detail" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}