import React, { useState } from 'react';

const DeltaTCalculator = () => {
  const [coilDiameter, setCoilDiameter] = useState('');
  const [wireDiameter, setWireDiameter] = useState('');
  const [coilLength, setCoilLength] = useState('');
  const [coilLengthStep, setCoilLengthStep] = useState('');
  const [deltaT, setDeltaT] = useState(null);

  const calculateDeltaT = () => {
    // Perform the ΔT calculation here based on the input parameters
    // Replace this calculation with your actual formula
    const result = coilDiameter + wireDiameter + coilLength - coilLengthStep;
    setDeltaT(result);
  };

  return (
    <div>
      <h2>ΔT Calculator</h2>
      <form>
        <div>
          <label htmlFor="coilDiameter">Coil Diameter [mm]:</label>
          <input
            type="text"
            id="coilDiameter"
            value={coilDiameter}
            onChange={(e) => setCoilDiameter(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="wireDiameter">Wire Diameter [mm]:</label>
          <input
            type="text"
            id="wireDiameter"
            value={wireDiameter}
            onChange={(e) => setWireDiameter(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="coilLength">Coil Length [mm]:</label>
          <input
            type="text"
            id="coilLength"
            value={coilLength}
            onChange={(e) => setCoilLength(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="coilLengthStep">Coil Length Step [mm]:</label>
          <input
            type="text"
            id="coilLengthStep"
            value={coilLengthStep}
            onChange={(e) => setCoilLengthStep(e.target.value)}
          />
        </div>

        <button type="button" onClick={calculateDeltaT}>
          Calculate ΔT
        </button>
      </form>

      {deltaT !== null && (
        <div>
          <h3>Result:</h3>
          <p>ΔT [K]: {deltaT}</p>
        </div>
      )}
    </div>
  );
};

export default DeltaTCalculator;
