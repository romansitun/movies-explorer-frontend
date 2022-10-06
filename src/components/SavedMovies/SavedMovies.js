import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies({list}) {

  const filterList = list.filter((item) => !!item.owner);

  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList list={filterList} savedMoviesPage={true}/>
    </section>
  );
}
  
export default SavedMovies;