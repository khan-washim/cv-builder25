import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CVDetail = () => {
  const { id } = useParams();
  const [cv, setCv] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cvs/${id}`)
      .then(res => setCv(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!cv) return <p>Loading...</p>;

  return (
    <div>
      <h2>{cv.fullName}</h2>
      <p>{cv.profession}</p>
      <p>{cv.summary}</p>
      {/* Render more fields as needed */}
    </div>
  );
};
export default CVDetail;
