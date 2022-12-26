import logo from './logo.svg';
import TeamLists from './commonents/TeamLists';

function App() {

  return (
    <>
      <div className="App container-fluid">
        <div className='row bg-dark align-items-center justify-content-center sticky-top'>
          <div class="col-6 text-center">

            {/* My Photo */}
            <a href='/index.html'><img src={logo} alt='Logo' /></a>
          </div>

          {/* Logo Text */}
          <div class="col-6">
            <div className='text-white text-center fs-3 mb-1'> React App Development</div>
          </div>
        </div>

        {/* Product Lists Data */}
        <div className='row g-3 m-4 mb-5'>
          <TeamLists />
        </div>
      </div>

    </>
  );
}


export default App;