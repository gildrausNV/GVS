import DeltaTCalculator from './DeltaTCalculator';
import './ResourcesInfo.css';

const ResourcesDetails = ({ resource }) => {
  return (
    <div className="resources-details">
      {resource && (
        <div>
          <h2>{resource.name}</h2>
          <img src={resource.image} alt={resource.name} />
          <p>{resource.description}</p>
        </div>
      )}
      <DeltaTCalculator />
    </div>
  );
};

export default ResourcesDetails;
