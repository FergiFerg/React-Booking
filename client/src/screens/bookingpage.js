import React, { useState, useEffect } from 'react'
import axios from "axios";
import Appointment from '../components/Appointment';

const HomeScreen = () => {
    const [appointment, setAppointments] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    useEffect(() => {
        async function fetchData() {
            try {
                setloading(true);
                const response = (await axios.get('/api/Appointments/getallappointments')).data;
                setAppointments(response);

                console.log(response);
                setloading(false);

            } catch (error) {
                seterror(true);
                console.error(error);
                setloading(false);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <h2>There are {appointment.length} appointments available</h2>
            <div className='container'>
                <div className='row justify-content-center mt-5'>

                    <div className='row'>

                        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>) : (appointment.map(appointment => {
                            return <div className='col-md-9 mt-2' >
                                <Appointment appointment={appointment} />
                            </div>
                        }))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen;
