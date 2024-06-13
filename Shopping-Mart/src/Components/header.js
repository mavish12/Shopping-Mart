import { FaShoppingBag, FaUser, FaCartPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Header(props) {
  const { addToCart } = props
  let navigate = useNavigate()

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center" style={{marginLeft:'10px'}}>
            <div>
              <FaShoppingBag size={23} />
            </div>
            <h1 className="navbar-brand" style={{ marginBottom: '0', fontSize: '25px', marginLeft:'2px',marginRight:'0px' }}>Mart</h1>
          </div>
          <div className="d-lg-none align-items-center" style={{ display: 'flex' }}> {/* Hide on larger screens */}
            <div style={{ marginRight: '40px' }}>
              <FaUser size={22} style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ marginTop: '-14px' }}>
              <div style={{ display: 'inline-block' }}>
                <p style={{ padding: '0px 6px', backgroundColor: '#020249', color: 'white', position: 'relative', borderRadius: '100%', marginBottom: '0%', marginLeft: '10px', marginTop: '-50px' }}> {addToCart ? addToCart.length : 0}</p>
              </div>
              <div style={{ marginRight: '40px', marginTop: '-34px' }}>
                <FaCartPlus size={22} style={{ cursor: 'pointer' }} onClick={() => navigate("/cart", { state: addToCart }, { replace: true })} />
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '43%' }}>
              <li className="nav-item" style={{ marginRight: '40px' }}>
                <h2 className="nav-link" style={{ marginRight: '20px', marginBottom: '0', cursor: 'pointer',fontWeight:'bold',fontSize:'20px' }} onClick={() => navigate("/", { state: addToCart })}>Home</h2>
              </li>
              <li className="nav-item" style={{ marginRight: '40px' }}>
                <h2 className="nav-link" style={{ marginRight: '20px', marginBottom: '0', cursor: 'pointer',fontWeight:'bold',fontSize:'20px' }} onClick={() => navigate("/shop", { replace: true })}>Shop</h2>
              </li>
              <li className="nav-item" style={{ marginRight: '40px' }}>
                <h2 className="nav-link" style={{ marginRight: '20px', marginBottom: '0', cursor: 'pointer',fontWeight:'bold',fontSize:'20px' }} onClick={() => navigate("/cart", { state: addToCart }, { replace: true })}>Cart</h2>
              </li>
            </ul>
            <div className="d-none d-lg-flex align-items-center" style={{ marginRight: '10%' }}> {/* Hide on smaller screens */}
              <div style={{ marginRight: '45px', cursor: 'pointer' }}>
                <FaUser size={22} />
              </div>
              <div style={{ marginTop: '-12px' }}>
                <div style={{ display: 'inline-block' }}>
                  <p style={{ padding: '0px 6px', backgroundColor: '#020249', color: 'white', position: 'relative', borderRadius: '100%', marginBottom: '0%', marginLeft: '10px', marginTop: '-50px' }}> {addToCart ? addToCart.length : 0}</p>
                </div>
                <div style={{ marginRight: '45px', cursor: 'pointer', marginTop: '-33px' }}>
                  <FaCartPlus size={22} onClick={() => navigate("/cart", { state: addToCart }, { replace: true })} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
