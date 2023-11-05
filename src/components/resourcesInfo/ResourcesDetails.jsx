import DeltaTCalculator from './DeltaTCalculator';
import './ResourcesInfo.css';

const ResourcesDetails = ({ resource, t }) => {
  return (
    <div className="resources-details">
      {resource && (
        <div>
          <h2>{t(resource.name)}</h2>
          <img src={resource.image} alt={resource.name} />
          <p>{t(resource.description)}</p>
        </div>
      )}
      <DeltaTCalculator />
    </div>
  );
};

export default ResourcesDetails;
