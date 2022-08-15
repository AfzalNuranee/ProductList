import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import axios from'axios';
function Editproduct() {

    const { pid } = useParams();

    const [pname, pickName] = useState("");
    const [pimage, pickImage] = useState("");
    const [category, pickCategory] = useState("");
    const [price, pickPrice] = useState("");
    const [rating, pickRating] = useState("");
    const [discription, pickDiscription] = useState("");
    const [message, updateMessage] = useState("")

    const getInfo = () => {
        
        
        const url='http://localhost:1234/productlist/'+pid
        axios.get(url).then(response=>{
                pickName(response.data.Name);
                pickImage(response.data.Image);
                pickCategory(response.data.Category);
                pickPrice(response.data.Price);
                pickRating(response.data.Rating);
                pickDiscription(response.data.Discription);
                //console.log(data);
            })
        }


    const update = () => {
        var input = {
            "Name": pname,
            "Image": pimage,
            "Category": category,
            "Price": price,
            "Rating": rating,
            "Discription": discription,
           
        };
        
        
        const url='http://localhost:1234/productlist/'+pid;
            axios.put(url,input)
            .then(response=>{
                updateMessage(pname + " Update successfully");
                 window.location.href="http://localhost:3000/#/dashboard";

            })
            
    }

    useEffect(()=>{
        getInfo();
    },[1]);


    return (
        <div className="container">
            <div className="row ">
                <h3 className='text-center text-info'>Edit Product</h3>
                <p className='text-center text-danger'>{message}</p>
                <div className="col-lg-4 text-info offset-4">
                    <div className="mb-2">
                        <label>Product Name</label>
                        <input type="text" className='form-control' value={pname} onChange={obj => pickName(obj.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Product Image</label>
                        <input type="text" className='form-control' value={pimage} onChange={obj => pickImage(obj.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Product  Category</label>
                        <select className='form-select' value={category} placeholder='Chooes Option' onChange={obj => pickCategory(obj.target.value)}>
                            <option selected> Choose</option>
                            <option> Men Clothing</option>
                            <option> Women Clothing</option>
                            <option> Electronic</option>
                            <option> Accessories</option>
                        </select>
                    </div>
                   
                    <div className="mb-2">
                        <label>Price </label>
                        <input type="text" className='form-control' value={price} onChange={obj => pickPrice(obj.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Rating</label>
                        <input type="text" className='form-control' value={rating} onChange={obj => pickRating(obj.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label>Discription</label>
                        <textarea type="text" className='form-control' value={discription} onChange={obj => pickDiscription(obj.target.value)} />
                    </div>
                    
                    <div className="mb-2 text-center ">
                        <button className="btn btn-info text-white" onClick={update} >Update</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Editproduct;