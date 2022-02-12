import './App.css';
import Accordion from "./components/Accordion";

    function App() {
      return (
        <div className="App">
        <Accordion 
          title="What is your return policy?" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam vitae risus eu dui eleifend imperdiet." />
        <Accordion 
          title="What is your return policy?" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam vitae risus eu dui eleifend imperdiet." />
        <Accordion 
          title="What is your return policy?" 
          content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam vitae risus eu dui eleifend imperdiet.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam vitae risus eu dui eleifend imperdiet.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam vitae risus eu dui eleifend imperdiet.</p>" />


        </div>
      );
    }

export default App;
