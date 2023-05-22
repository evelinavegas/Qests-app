import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Person from '../img/person.svg'
import Puzzle from '../img/puzzle.svg'
import Close from '../img/close.svg'
import Clock from '../img/clock.svg'
import { useFormik} from 'formik'

function Qest() {
    const [qest, setQest] = useState([])
    const [formStyle, setStyle] = useState('display-none')
    const { id } = useParams()
    useEffect(() => {
        axios
            .get(`http://localhost:3001/quests/${id}`)
            .then(data => {
                setQest([data.data])
            })
    }, [])
    function validate(values){
        const errors = {};
        if(!values.name){
            errors.name = 'Required';
        }

        if (!/^\d+$/.test(values.phone)) {
            errors.phone = 'Required';
        } else if (values.phone.length > 12) {
            errors.lastName = 'Must be 12 characters or less';
        }
        if(values.countPeople > 8){
            errors.countPeople = 'Required'
        }
        if(!values.scales){
            errors.scales = 'Required'
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {name: '', phone:'', countPeople: '', scales: false},
        validate,
        onSubmit: values => {
            console.log('Form', values)
            alert('form send');
            axios.post('http://localhost:3001/data', JSON.stringify(values))
                .then(console.log('ok'));
        },        
    })
    function getStyles(errors) {
        if (errors) {
          return 'errorStyle'
        }
      }
    function assignStyleForm() {
       setStyle('form-container')
    }
    function closeForm(){
        setStyle('display-none')
    }
    document.addEventListener('keydown', (e)=> {
        if(e.key === "Escape" ){
            closeForm()        
        }
    })
    return(
        <div>
        {
            qest.map(q => (
                <div key={q.id} style={{ backgroundImage: `url(../${q.coverImg}`}} className="qest-cover flex-row">
                    <div className="qest-container">
                        <p className="text-yelow">{q.type}</p>
                        <h2 className="qest-heading">{q.title}</h2>  
                        <div className="flex-row main-block-info qest-info">
                            <div className="flex-row">
                                <img src={Clock} alt="Clock" className='main-block-icon'></img>
                                <p>{q.duration} хв.</p>
                            </div>
                            <div className="flex-row">
                                <img src={Person} alt="Person" className='main-block-icon'></img>
                                <p>{q.peopleCount[0]}-{q.peopleCount[1]} осіб</p>
                            </div>
                            <div className="flex-row">
                                <img src={Puzzle} alt="Puzzle" className='main-block-icon'></img>
                                <p>{q.level}</p>
                            </div>
                        </div>
                        <p>{q.description}</p>
                        <button className="qest-btn" onClick={assignStyleForm}>Бронювати</button>
                    </div>
                </div>
            ))
            }
            <div className={formStyle} >
                <form className="form flex-column" onSubmit={formik.handleSubmit}>
                    <img src={Close} alt="Close" className="close" onClick={closeForm}/>

                    <div className="form-component flex-column">
                        <label htmlFor='name' >Enter name:</label>
                        <input id='name' type='text' name='name' placeholder="Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    </div>

                    <div className="form-component flex-column">
                        <label htmlFor='phone'>Enter phone:</label>
                        <input id='phone' type='text'  name='phone' placeholder="Phone" onChange={formik.handleChange} value={formik.values.phone} />
                        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
                    </div>

                    <div className="form-component flex-column">
                        <label htmlFor='countPeople'>Enter count people:</label>
                        <input id='countPeople' type='text'  name='countPeople' placeholder="Count people" onChange={formik.handleChange} value={formik.values.countPeople} />
                        {formik.errors.countPeople ? <div>{formik.errors.countPeople}</div> : null}
                    </div>
                    <input className="qest-btn btn-submit" type="submit" value="Відправити заявку" />
                    <div>
                        <input className="form-checkdox" type="checkbox" id="scales" name="scales" checked={formik.values.scales} onChange={formik.handleChange}/>
                        <label className="form-checkdox-label" htmlFor="scales">Я згоден з правилами обробки персональних даних та користувальницькою угодою</label>
                        {formik.errors.scales ? <div>{formik.errors.scales}</div> : null}
                    </div>
                </form>
            </div>
        </div>    
    )
}
export default Qest