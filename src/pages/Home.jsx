import React from 'react'
import { Cards, Chart, CountryPicker,Footer,Navbar,Header, IndoData } from "../components";
import styles from "../App.module.css"
import { fetchData } from "../api";

import "../main.css"
import { Container } from "react-bootstrap";


class Home extends React.Component {
    state = {
      data: {},
      country: "",
    };
  
    async componentDidMount() {
      const fetchedData = await fetchData();
  
      this.setState({ data: fetchedData });
    }
  
    handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
  
      this.setState({ data: fetchedData, country: country });
    };
  
    render() {
      const { data, country } = this.state;
      return (
        <div className={styles.container}>
          <Navbar />
          <Header text="Live Data Coronavirus Indonesia & Dunia"/>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Container>
            <Chart data={data} country={country} />
          </Container>
          <IndoData/>
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;
