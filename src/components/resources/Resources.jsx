import React from "react";
import "./Resources.css";
// import placeholder from "./placeholder.png";
import pdf from "./pdf.png";
import formula from "./erlangb_formula.png";
import solenoid_aksijalni from "./solenoid_aksijalni.png";
import solenoid_radijalni from "./solenoid_radijalni.jpg";
import { useNavigate } from "react-router";

const Resources = ({ t }) => {
  const navigate = useNavigate();

  return (
    <div className="resources">
      <div className="resources-content">
        <h2>{t('Resources')}</h2>
        <p className="center-text">
          {t('These resources are used by GVS experts and associates, and GVS decided to make them publicly available. They come with no guarantees or obligations from GVS. GVS will try to address any issues that users may have with these resources.')}
        </p>

        <h3>{t('Engineering Tools')}</h3>
        <p className="center-text">
          {t('These tools are utilities for engineers. All tools are free to use for commercial, closed and non-commercial projects without restriction.')}
        </p>

        <div className="tools-container">
          <div className="tool" onClick={() => navigate('/resource/1')}>
            <div className="tool-text">
              <p>{t('Axial coil (solenoid) calculation worksheet')}</p>
              <p>{t('Tool for calculating axial coil (solenoid) parameters.')}</p>
            </div>
            <div className="tool-image">
              <img src={solenoid_aksijalni} alt="img" className="tool-image" style={{width: '300px'}}/>
            </div>
          </div>
          <div className="tool" onClick={() => navigate('/resource/2')}><div className="tool-image">
              <img src={solenoid_radijalni} alt="img" className="tool-image" style={{height: '200px'}}/>
            </div>
            <div className="tool-text">
              <p>{t('Radial coil (solenoid) calculation worksheet')}</p>
              <p>{t('Tool for calculating radial coil (solenoid) parameters.')}</p>
            </div>
            
          </div>
          <div className="tool" onClick={() => navigate('/resource/3')}>
            <div className="tool-text">
              <p>{t('Erlang B formula calculation worksheet')}</p>
              <p>
                {t('Tool for Erlang B formula calculations in telecommunications.')}
              </p>
            </div>
            <div className="tool-image">
              <img src={formula} alt="img" className="tool-image" />
            </div>
          </div>
        </div>

        <h3>{t('Technical Articles')}</h3>
        <p className="center-text">
          {t('Technical articles from GVS experts are listed in the table below. The content of the articles is published under the Creative Commons CC-BY-SA 4.0 license, which means it is free to copy, distribute, and display and make derivative works or remixes if they give GVS the credits and if the distribution of such works is distributed under identical to or not more restrictive than CC-BY-SA 4.0. Use for commercial purposes is allowed under the same conditions.')}
        </p>
        <div className="articles-container">
          <table>
            <thead>
              <tr>
                <th>{t('Title')}</th>
                <th>{t('Pages')}</th>
                <th>{t('Format')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('Asymmetric/polling Alternating Bit Protocol')}</td>
                <td>5</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t('Erlang B and Engset formula Calculation')}</td>
                <td>7</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t('Ensuring protected access to shared data')}</td>
                <td>9</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t('Base41 Encoding Specification')}</td>
                <td>8</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>{t('Testing w/100% coverage is not enough')}</td>
                <td>2</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  {t('Stopping the Short-Circuit Fault Spreading in DC Distribution Systems')}
                </td>
                <td>8</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Resources;
