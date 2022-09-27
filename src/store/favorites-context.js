import { createContext, useState } from 'react';

// create context state object component
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

// component for way of updating context object values
// made available wherever state values are needed or updated

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
