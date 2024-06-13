import { serviceData } from './constant';
import './style.css';
function Advantage() {
    return (
        <>
            <div className="container text-center my-5 p-4" >
                <div className="row advantages">
                    {serviceData.map((item, index) => (
                        <div key={index} className="col advantages-items" style={{ backgroundColor: item.bg }}>
                            {item.icon}
                            <h3>{item.title}</h3>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Advantage;