import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CVList = () => {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cvs')
      .then(res => setCvs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All CVs</h2>
      <ul>
        {cvs.map(cv => (
          <li key={cv._id}>
            <Link to={`/cv/${cv._id}`}>{cv.fullName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CVList;
