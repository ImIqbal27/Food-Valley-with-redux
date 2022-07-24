import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/esm/Table';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';



const Header = () => {
    const [price, setPrice] = useState(0);

    const getData = useSelector((state) => state.cartreducer.carts);
    console.log(getData);

    const dispatch = useDispatch();



    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getData.map((ele, k) => {
            price = ele.price * ele.qnty + price;

        });
        setPrice(price)

    }

    useEffect(() => {
        total();
    }, [total])


    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to='/' className="text-decoration-none text-light mx-3"> <h4>Food Valley </h4></NavLink>
                    <Nav className="me-auto">
                        <NavLink to='/' className="text-decoration-none text-light px-2">Home</NavLink>
                        <NavLink to='/' className="text-decoration-none text-light px-2">Blog</NavLink>
                        <NavLink to='/' className="text-decoration-none text-light px-2">Contact US</NavLink>
                        <NavLink to='/' className="text-decoration-none text-light px-2">About US</NavLink>

                    </Nav>
                    <Badge badgeContent={getData.length} color="success"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>


                </Container>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >

                    {


                        getData.length ?

                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restarant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td >
                                                                <p>{e.rname}</p>
                                                                <p>Price  {e.price}  ৳</p>
                                                                <p>Qty  ৳ {e.qnty}</p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}><i className='fas fa-trash smalltrash'></i></p>


                                                            </td>
                                                            <td className='mt-3' style={{
                                                                color: "red", fontSize: 20, cursor: "pointer"
                                                            }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>

                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }

                                        <h4><p>Total {price}</p></h4>
                                    </tbody>


                                </Table>


                            </div>

                            :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 23 }}>Your cart is empty !</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />

                            </div>
                    }

                </Menu>
            </Navbar>
        </div >
    );
};

export default Header;