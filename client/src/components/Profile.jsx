import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    function getUserDetails() {
      if (id) {
        fetch(`http://localhost:4000/schedules/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setUsername(data.username);
            setSchedules(data.schedules);
            setTimezone(data.timezone.label);
            setLoading(false);
          })
          .catch((err) => console.error(err));
      }
    }
    getUserDetails();
  }, [id]);

  useEffect(() => {
    if (!localStorage.getItem('_id')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <main className='profile'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Hey, {username}</h2>
          <p>Here is your schedule: - {timezone}</p>
          <table>
            <tbody>
              {schedules.map((sch) => (
                <tr key={sch.day}>
                  <td style={{ fontWeight: 'bold' }}>
                    {sch.day.toUpperCase()}
                  </td>
                  <td>{sch.startTime || 'Unavailable'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Profile;
