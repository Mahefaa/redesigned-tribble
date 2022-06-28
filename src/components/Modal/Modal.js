import "./Modal.css"
import axios from "axios";
//default values only show after clicking the add buttons
//pre-written values appear after clicking one of the table rows in ../List
export default function Modal(props){
    const {data,method,setShowModal}=props;
    const formData={};
    let url="https://jsonplaceholder.typicode.com/users";
    url+=(method==="put")?("/"+data.id):("");
    const dataValues = Object.values(data);
    let onClick=()=>{
        setShowModal(false);
        window.removeEventListener("click",onClick);
    }
return (
    <div className={"touchable"} onMouseLeave={()=>{
        window.addEventListener("click",onClick);
    }}
    onMouseEnter={()=>{
        window.removeEventListener("click",onClick);
    }}
    >
        <form id={"formID"} >
            <h3>Formulaire de type {method}</h3>
            <p>*placeholder values are taken by input after no input and blur*</p>
            {
                dataValues.map((e)=>{
                    if(typeof(e)==="object"){
                        e=(e.name||e.city);
                    }
                    return (
                        <input type={"text"} placeholder={e} onBlur={(event)=> {
                            if(event.currentTarget.value.trim()===""){
                                event.currentTarget.value=e.currentTarget.placeholder;
                                formData[e]=event.currentTarget.value;
                            }
                        }}
                        onChange={(event)=>{
                            formData[e]=event.currentTarget.value;
                            data[3]=formData[e];
                        }}
                        />
                    )
                })
            }
            <button type={"submit"} className={"btn btn-primary"} formAction={method} onClick={(e)=> {
                e.preventDefault()
                axios[method](url,formData).then((response)=>console.log(response)).catch((error)=>console.error(error));
                setShowModal(false);
            }}>{method==="post"?"add":"update"}</button>
            <button type={"reset"} className={"btn btn-danger"}>reset</button>
            <button type="reset" className={"btn btn-danger"} onClick={()=>setShowModal(false)}>Exit</button>
        </form>

    </div>
)
}
