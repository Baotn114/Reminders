import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from "axios";
import { useEffect } from "react";
//import {useState} from 'react';
import { useRemindersContext } from '../hooks/useRemindersContext';


const Display = () => {
    //const [display, setDisplay] = useState(null);
            //reminders
    const {reminders, dispatch} =  useRemindersContext();

    const getReminders = async () => {
        await axios.get('http://localhost:4000/api/user/getReminder')
            .then(res => {
                const data = res.data;
                console.log(data);
                dispatch({type: 'SET_REMINDERS', payload: data});
            })
    }

    const handleDelete = (id) => {
        //console.log(id);
        axios.delete('http://localhost:4000/api/user/delete/' + id)
        .then(res =>{
            const data = res.data
            //console.log(data);
            dispatch({type: 'DELETE_REMINDERS', payload: data})
        })
    }

    useEffect(()=>{
        getReminders();
    }, [])




    return (
        <div className="custom-display">
            {reminders && reminders.map((data_display) => (
                <MDBCard style={{ maxWidth: '840px',margin: "0 auto", display: "block", marginBottom : "20px"}}>
                <MDBRow className='g-0'>
                    <MDBCol md='4' >
                    <MDBCardImage src={data_display.image} alt='your_pic' style={{ maxWidth: '100%', height: '240px'}}/>
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>
                            {data_display.name}
                        </MDBCardTitle>
                        <MDBCardText>
                            I am {data_display.age} years old
                        </MDBCardText>
                        <MDBCardText>
                            I'm currenly working as {data_display.job}
                        </MDBCardText>
                        <MDBCardText>
                            I am chasing after {data_display.objectives} and I will have it in the near future.
                        </MDBCardText>
                        <MDBBtn className='me-1' color='danger' onClick={() => handleDelete(data_display._id)}>
                            Delete
                        </MDBBtn>
                    </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            ))}
        </div>
        //<div>fixing</div>
    );
}
 
export default Display;