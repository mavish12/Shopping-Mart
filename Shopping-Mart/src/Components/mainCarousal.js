import { corousalList } from './constant';
import './style.css';
function MainCarousal() {
    let indicatorArray = Array.from({ length: corousalList.length }, (_, index) => index + 1);
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators ">
                    {indicatorArray.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner" style={{ backgroundColor: '#eaf3f3f7' }}>
                    {corousalList.map((item, index) => (
                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item "}>
                            <div className='carousals' style={{}}>
                                <div style={{ display: 'grid', alignSelf: 'center' }}>
                                    <h1 className='carousals-title'>{item.title}</h1>
                                    <p className='carousals-intro'>{item.desc}</p>
                                    <p className='carousals-highlights' style={{ border: '1px solid #f4e6ba', backgroundColor: '#f4e6ba', cursor: 'pointer' }}>Visit Collections</p>
                                </div>
                                <div className='carousals-parent-imgs'>
                                    <img className='carousals-imgs' src={item.cover} alt="sofaimage" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default MainCarousal;