import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritePage() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0)
    content = <p>You got no favorites yet, start adding some/</p>;
  else content = <MeetupList meetups={favoritesContext.favorites} />;
  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
}

export default FavoritePage;
