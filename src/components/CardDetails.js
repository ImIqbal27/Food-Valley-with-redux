import React from 'react';
import Table from 'react-bootstrap/Table';


const CardDetails = () => {
    return (
        <div className='container mt-2'>
            <h2 className='text-center'>Items Details Page </h2>
            <section className='container mt-3'>
                <div className="itemsdetails">
                    <div className="items_img">
                        <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
                    </div>
                    <div className="details">
                        <table>
                            <tr>
                                <td>
                                    <p> <strong>Restaurant</strong>: Massala Theory</p>
                                    <p> <strong>Price</strong>: 220</p>
                                    <p> <strong>Dishes</strong>: Bengali Vorta</p>
                                    <p> <strong>Total</strong>:344</p>

                                </td>
                                <td>
                                    <p><strong>Rating: </strong> <span className='' style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>4.2 ★	</span></p>
                                    <p> <strong>Review:</strong> <span>2525 + order placed from here recently	</span> </p>
                                    <p> <strong>Remove:</strong> <span className='fas fa-trash' style={{ color: "red", fontSize: 19, cursor: "pointer" }}>	</span></p>

                                </td>
                            </tr>
                        </table>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default CardDetails;