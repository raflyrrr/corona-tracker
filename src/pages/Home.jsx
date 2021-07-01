import React from 'react'
import { Cards, Chart, CountryPicker,Footer,Navbar,Header, IndoData,VaksinIndo } from "../components";
import styles from "../App.module.css"
import { fetchData,fetchDataVaksin } from "../api";

import "../main.css"
import { Container } from "react-bootstrap";


class Home extends React.Component {
    state = {
      data: {},
      dataVaksin:{},
      country: "",
    };
  
    async componentDidMount() {
      const fetchedData = await fetchData();
      const fetchedDataVaksin  = await fetchDataVaksin()
      this.setState({ data: fetchedData });
      this.setState({ dataVaksin: fetchedDataVaksin})
    }
  
    handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
  
      this.setState({ data: fetchedData, country: country });
    };
  
    render() {
      const { data, country, dataVaksin } = this.state;
      return (
        <div className={styles.container}>
          <Navbar classHome="nav-active" />
          <Header text="Live Data Coronavirus Indonesia & Dunia"/>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Container>
            <Chart data={data} country={country} />
          </Container>
          <VaksinIndo data={dataVaksin}/>
          <IndoData/>
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;
