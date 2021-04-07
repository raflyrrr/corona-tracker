import React, { useState, useEffect } from "react";
import './IndoData.css'
import CountUp from "react-countup";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
import axios from 'axios'

function IndoData() {
    const [dataAPI, setDataAPI] = useState([]);
    const [loading, setLoading] = useState (false)
    const override = css`
    display:block;
    padding:5%;
    text-align:center;
  `;
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi"
      )
      .then((res) => {
        setDataAPI(res.data);
        setLoading(true)
      })
      .catch((error) => console.log(error));
      setTimeout(() => {
        setLoading(false);
      }, 500);
  }, []);
  console.log(dataAPI)
  return (
    <div>
       <div className="table-data">
                <h2 className="text-center text-capitalize mb-4">Daftar kasus virus corona di provinsi indonesia</h2>
                <div className="row mb-5">
                    <div className="col-lg col-md mx-auto bg-white rounded shadow">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col- col-lg-2">No.</th>
                                        <th scope="col" className="col- col-lg-4">Provinsi</th>
                                        <th scope="col" className="col- col-lg-2">Kasus Positif</th>
                                        <th scope="col" className="col- col-lg-2">Kasus Sembuh</th>
                                        <th scope="col" className="col- col-lg-2">Meninggal</th>
                                    </tr>
                                </thead>                                
                                <tbody>
                                  {loading ? <div>{dataAPI.map((data,index)=>{
                                       return(                       
                                        <tr key={data.attributes.FID}>
                                        <th scope="row" className="col- col-lg-2" key={data.attributes.FID}>{index + 1}</th>
                                        <td className="col- col-lg-4">{data.attributes.Provinsi}</td>
                                        <td className="col- col-lg-2 text-center"><CountUp start={0} end={data.attributes.Kasus_Posi} duration={2.5}separator=","/></td>
                                        <td className="col- col-lg-2 text-center"><CountUp start={0} end={data.attributes.Kasus_Semb} duration={2.5}separator=","/></td>
                                        <td className="col- col-lg-2 text-center"><CountUp start={0} end={data.attributes.Kasus_Meni} duration={2.5}separator=","/></td>
                                    </tr>
                                       )
                                   })}</div> : 
                                   <PulseLoader
                                    color={"#00b7ff;"}
                                    css={override}
                                    Loading={loading}
                                    size={20}
                                  /> }
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default IndoData;
