import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useRemindersContext } from '../hooks/useRemindersContext';
import axios from 'axios'
const Create = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const [objectives, setObjectives] = useState('');
    const {dispatch} = useRemindersContext();

    const handleSubmit = async (e) =>{
        if (e && e.preventDefault) { e.preventDefault();}
        await axios.post(`http://localhost:4000/api/user/create`, { 
            name: name,
            age: age,
            job: job,
            objectives: objectives
        })
        .then(res => {
            const data = res.data;
            console.log(res);
            console.log(res.data);
            //When database created successfully, It should add new workout to the global state, which is in
            //front-end side
            dispatch({type: 'CREATE_REMINDERS', payload: data})
            setName('');
            setAge('');
            setJob('');
            setObjectives('');
        })
    }

    

    return ( 
        <form onSubmit={handleSubmit} >
            <h3>What do you want to remember?</h3>
            <MDBInput label='Your Name' id='form1' type='text'  value={name}  onChange={(e) => setName(e.target.value)} style={{margin: "10px"}}/>
            <MDBInput label='Your age' id='form1' type='text' value={age}  onChange={(e) => setAge(e.target.value)} style={{margin: "10px"}}/>
            <MDBInput label='Your job' id='form1' type='text' value={job} onChange={(e) => setJob(e.target.value)} style={{margin: "10px"}}/>
            <MDBInput label='Your objectives' id='form1' type='text' value={objectives} onChange={(e) => setObjectives(e.target.value)} style={{margin: "10px"}}/>
            <MDBBtn color='info'>Reminder</MDBBtn>
        </form>
    );
}
    
export default Create;
