import { combineReducers } from 'redux';
import navigationReducer from '../mobile/navigation_configuration/Navigation.Reducer';
import homeReducer from '../mobile/home/Home.Reducer';
import searchRoomReducer from '../mobile/search/SearchRoom.Reducer';
import locationReducer from '../mobile/location/LocationPopUp.Reducer';
import countryReducer from '../mobile/country/Country.Reducer';
import cityReducer from '../mobile/city/City.Reducer';
import postRoomReducer from '../mobile/post_room/PostRoom.Reducer';
import addImageReducer from '../mobile/add_images/AddImage.Reducer';

export default combineReducers({
    navigation: navigationReducer,
    home: homeReducer,
    searchRoom: searchRoomReducer,
    location: locationReducer,
    country: countryReducer,
    city: cityReducer,
    postRoom: postRoomReducer,
    addImage: addImageReducer
})