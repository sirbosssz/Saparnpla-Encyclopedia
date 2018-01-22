export const SEARCH_TEXT = 'SEARCH_TEXT';
export const FISH = 'FISH';

export const state = {
  search_text: {
    search: '',
  },
  fish: {
    thai_name: '-',
    english_name: '-',
    scientific_name: '-',
    local_name: '-',
    group_fish: '-',
    nature: '-',
    habitat: '-',
    size: '-',
    price: 0,
    cook_F: '-',
    cook_N: '-',
    cook_O: '-',
    cook_T: '-',
    cook_To: '-',
    cook_Y: '-',
    other: '-',
    link_photo: "http://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheRightFoodToFeedYourFish-Herbivores-20160818?$AR0201$",
  },
}

export const searchTextChange = search => {
  return {
    type: SEARCH_TEXT,
    payload: search,
  }
}
