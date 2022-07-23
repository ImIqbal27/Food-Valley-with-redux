import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const CardDetails = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    const getData = useSelector((state) => state.cartreducer.carts);
    // console.log(getData);

    const compare = () => {
        let comparedata = getData.filter((e) => {
            return e.id == id;

        });
        setData(comparedata)
    }



    useEffect(() => { compare() }, [id])

    return (
        <div className='container mt-2'>
            <h2 className='text-center'>Items Details Page </h2>
            <section className='container mt-3'>
                <div className="itemsdetails">
                    {
                        data.map((ele) => {
                            return (
                                <>
                                    <div className="items_img">
                                        <img src={ele.imgdata} alt=""  />
                                    </div>
                                    <div className="details">
                                        <table>
                                            <tr>
                                                <td>
                                                    <p> <strong>Restaurant</strong>: {ele.rname}</p>
                                                    <p> <strong>Price</strong>: {ele.price}</p>
                                                    <p> <strong>Dishes</strong>:{ele.address} </p>
                                                    <p> <strong>Total</strong>:{ele.rname}</p>

                                                </td>
                                                <td>
                                                    <p><strong>Rating: </strong> <span className='' style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                                                    <p> <strong>Review:</strong> <span>{ele.somedata}	</span> </p>
                                                    <p> <strong>Remove:</strong> <span className='fas fa-trash' style={{ color: "red", fontSize: 19, cursor: "pointer" }}>	</span></p>

                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                </>
                            );
                        })
                    }

                </div>

            </section>
        </div>
    );
};

export default CardDetails;