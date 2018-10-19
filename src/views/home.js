import React from 'react';
import Hero from '../components/Hero';
import MainContainer from '../components/MainContainer';

class Home extends React.Component {

  render() {
    return(
      <div>
        <Hero />
        <section id="section02" class="demo">
        	<MainContainer />
        </section>
      </div>
    );
  }
}

export default Home;
