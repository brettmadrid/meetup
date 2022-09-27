import { createContext, useState } from 'react';

// create context state object component
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // below added for easier autocomplete in components
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  itemIsFavorite: meetupId => {},
});

// component for way of updating context object values
// made available wherever state values are needed or updated

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites(prevUserFavorites => {
      setUserFavorites(prevUserFavorites.concat(favoriteMeetup));
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  // create context object containing state values and methods
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
