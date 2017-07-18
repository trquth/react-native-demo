import {
    ADD_IMAGE_SELECT_IMAGE,
    ADD_IMAGE_CLEARUP_LIST_IMAGES,
    ADD_IMAGE_REMOVE_IMAGE
} from './AddImage.Action';

const initialState = {
    listSelectedImages: [{
        id: new Date().valueOf(),
        uri: 'file:///Users/admin/Library/Developer/CoreSimulator/Devices/7E006963-DFC1-42C5-8C85-A10F672003D5/data/Containers/Data/Application/5BFE2CEA-B955-4C1B-86FA-ADF68E692AD7/Documents/images/B147F3E1-1877-40E5-AA98-CA00A43090AF.jpg'
    }],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_IMAGE_SELECT_IMAGE':
            let listImages = state.listSelectedImages.concat(action.data);
            return {
                ...state,
                listSelectedImages: listImages
            }
        case 'ADD_IMAGE_REMOVE_IMAGE':
            let listImagesAfterRemove = state.listSelectedImages.filter(item => {
                return item.id !== action.data
            });
            return {
                ...state,
                listSelectedImages: listImagesAfterRemove
            }
        case 'ADD_IMAGE_CLEARUP_LIST_IMAGES':
            return {
                ...state,
                listSelectedImages: []
            }
    }
    return state;
}