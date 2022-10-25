import './App.css';
import HeaderContainer from './Containers/HeaderContainer';
import HomeContainer from './Containers/HomeContainer';
//import User from './Component/User';


function App() {
  return (
    <div className="App">
      {/*<h1>Props with Redux</h1>
      <User  data={{name:"Sonu Baghel" , age:"23"}}/>*/}
     <HeaderContainer />
      <HomeContainer />      
    </div>
  );
}

export default App;
