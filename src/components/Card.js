import React from 'react'
export default function Card(props) {

    let options = props.options
    let priceOptions = Object.keys(options)

    const handleAddToCart = () =>{

    }

  return (
    <div>

            <div>
                <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                    <img src="https://t4.ftcdn.net/jpg/03/99/84/49/360_F_399844901_hqsm8dnV9kRxBjEyeDy5xdvtCUEXgdIE.jpg" className="card-img-top" alt="..." style={{ height: "120px", objectFit:"fill" }}/>
                    <div className="card-body">
                        <h5 className="card-title">Paneer Chillie</h5>
                        <p className="card-text">
                            My Favourite
                        </p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-info rounded'>
                                {Array.from(Array(6), (e, i) => (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                ))}
                            </select>

                            <select className='m-2 h-100 bg-info rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>



                            <select className = 'm-2 h-100 bg-info rounded'>
                                {priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>



                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                            
                            <hr>
                            </hr>
                            <div className = {"btn btn-info justify-center ms-2"} onClick = {handleAddToCart}>Add To Cart</div>




                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}
