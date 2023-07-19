import { useNavigate } from "react-router";



const Contact = () => {

  let navigate=useNavigate()

  return (
    <div className="p-3">
      <h1>Contact</h1>
      <button className="btn btn-success" onClick={()=>navigate(-1)}>Go Back</button>
      <button className="btn btn-primary" onClick={()=>navigate("/")}>Go Home</button>
    </div>
  );
};

export default Contact;
