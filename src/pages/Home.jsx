import React from 'react'
import { Cards, Chart, CountryPicker,Footer,Navbar,Header, IndoData,VaksinIndo } from "../components";
import styles from "../App.module.css"
import { PulseLoader } from "react-spinners";
import { fetchData,fetchDataVaksin } from "../api";

import "../main.css"
import { Container } from "react-bootstrap";


class Home extends React.Component {
    state = {
      data: {},
      dataVaksin:{},
      country: "",
      isLoading:true
    };
  
    async componentDidMount() {
      const fetchedData = await fetchData();
      const fetchedDataVaksin  = await fetchDataVaksin()
      this.setState({ data: fetchedData,dataVaksin: fetchedDataVaksin,isLoading:false });
    }
  
    handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
  
      this.setState({ data: fetchedData, country: country });
    };
  
    render() {
      const { data, country, dataVaksin,isLoading } = this.state;
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
          {isLoading ? <PulseLoader loading = {isLoading} color="#fff;" /> : <Footer />}
        </div>
      );
    }
  }
  
  export default Home;
