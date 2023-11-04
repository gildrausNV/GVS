import React from "react";
import "./Resources.css";
// import placeholder from "./placeholder.png";
import pdf from "./pdf.png";
import formula from "./erlangb_formula.png";
import solenoid_aksijalni from "./solenoid_aksijalni.png";
import solenoid_radijalni from "./solenoid_radijalni.jpg";

const Resources = () => {
  return (
    <div className="resources">
      <div className="resources-content">
        <h2>Resources</h2>
        <p className="center-text">
          These resources are used by GVS experts and associates, and GVS
          decided to make them publicly available. They come with no guarantees
          or obligations from GVS. GVS will try to address any issues that users
          may have with these resources.
        </p>

        <h3>Engineering Tools</h3>
        <p className="center-text">
          These tools are utilities for engineers. All tools are free to use for
          commercial, closed and non-commercial projects without restriction.
        </p>

        <div className="tools-container">
          <div className="tool">
            <div className="tool-text">
              <p>Axial coil (solenoid) calculation worksheet</p>
              <p>Tool for calculating axial coil (solenoid) parameters.</p>
            </div>
            <div className="tool-image">
              <img src={solenoid_aksijalni} alt="img" className="tool-image" style={{width: '300px'}}/>
            </div>
          </div>
          <div className="tool"><div className="tool-image">
              <img src={solenoid_radijalni} alt="img" className="tool-image" style={{height: '200px'}}/>
            </div>
            <div className="tool-text">
              <p>Radial coil (solenoid) calculation worksheet</p>
              <p>Tool for calculating radial coil (solenoid) parameters.</p>
            </div>
            
          </div>
          <div className="tool">
            <div className="tool-text">
              <p>Erlang B formula calculation worksheet</p>
              <p>
                Tool for Erlang B formula calculations in telecommunications.
              </p>
            </div>
            <div className="tool-image">
              <img src={formula} alt="img" className="tool-image" />
            </div>
          </div>
        </div>

        <h3>Technical Articles</h3>
        <p className="center-text">
          Technical articles from GVS experts are listed in the table below. The
          content of the articles is published under the Creative Commons
          CC-BY-SA 4.0 license, which means it is free to copy, distribute, and
          display and make derivative works or remixes if they give GVS the
          credits and if the distribution of such works is distributed under
          identical to or not more restrictive than CC-BY-SA 4.0. Use for
          commercial purposes is allowed under the same conditions.
        </p>
        <div className="articles-container">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Pages</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Asymmetric/polling Alternating Bit Protocol</td>
                <td>5</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Erlang B and Engset formula Calculation</td>
                <td>7</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ensuring protected access to shared data</td>
                <td>9</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Base41 Encoding Specification</td>
                <td>8</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Testing w/100% coverage is not enough</td>
                <td>2</td>
                <td>
                  <a href="asimetricxni_protokol_izvrtlyivog_bita_en.pdf">
                    <img src={pdf} alt="PDF" className="pdf-img"/>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Stopping the Short-Circuit Fault Spreading in DC Distribution
                  Systems
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
