import { useEffect, useState } from 'react';
import './ResourcesInfo.css';
import { useParams } from 'react-router';
import ResourcesDetails from './ResourcesDetails';
import axialCoil from "../resources/solenoid_aksijalni.png";
import radialCoil from "../resources/solenoid_radijalni.jpg";
import erlangBFormula from "../resources/erlangb_formula.png";

const ResourcesInfo = () => {
    const [resources, setResources] = useState([
        {
            id: 1,
            name: "Axial coil worksheet",
            image: axialCoil,
            description:
              "The window below contains the axial coil (solenoid) parameter calculation worksheet. When you enter the parameters and click \"Calculate\", the results will be written in the table. The results may be transfered by the usual methods of your environment to other programs for further processing."
          },
          {
            id: 2,
            name: "Radial coil worksheet",
            image: radialCoil,
            description:
              "The window below contains the radial coil (solenoid) parameter calculation worksheet. When you enter the parameters and click \"Calculate\", the results will be written in the table. The results may be transfered by the usual methods of your environment to other programs for further processing."
          },
          {
            id: 3,
            name: "Erlang B formula worksheet",
            image: erlangBFormula,
            description:
              "The window below contains the Erlang B formula calculation worksheet. One of the three parameters is calculated from other two. Use \"Change target\" button to change the parameter to calculate. Enter the parameters and click \"Calculate\"."
          },
    ]);
      const { resourceId } = useParams();
      const [resource, setResource] = useState(null);
    
      useEffect(() => {
        const filteredProduct = resources.find((p) => p.id == resourceId);
        setResource(filteredProduct);
      }, [resourceId]);

    return ( 
        <div className="resources-info">
            <ResourcesDetails resource={resource}/>
        </div>
     );
}
 
export default ResourcesInfo;