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
    @media (max-width:720px){
      text-align:left;
    }
  `;
  useEffect(() => {
    axios
      .get(
        "https://indonesia-covid-19.mathdro.id/api/provinsi/"
      )
      .then((res) => {
        setDataAPI(res.data.data);
        setLoading(false)
      })
      .catch((error) => console.log(error));
      setTimeout(() => {
        setLoading(true);
      }, 500);
  }, []);
  return (
       <div className="table-data">
                <h5 className=" text-capitalize mb-4">Daftar kasus virus corona di provinsi indonesia</h5>
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
                                  {loading ? <>{dataAPI.map((data,index)=>{
                                       return(                       
                                        <tr key={data.fid}>
                                        <th scope="row" className="col- col-lg-2" key={data.fid}>{index + 1}</th>
                                        <td className="col- col-lg-4">{data.provinsi}</td>
                                        <td className="col- col-lg-2 text-center"><CountUp start={0} end={data.kasusPosi} duration={2.5}separator=","/></td>
                                        <td className="col- col-lg-2 text-center"><CountUp start={0} end={data.kasusSemb} duration={2.5}separator=","/></td>
                                        <td className="col- col-lg-2 text-center"><CountUp start={0} end={data.kasusMeni} duration={2.5}separator=","/></td>
                                    </tr>
                                       )
                                   })} </> : 
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
  );
}

export default IndoData;
