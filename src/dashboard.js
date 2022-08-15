import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [productlist, setproductList] = useState([]);
  const [message, updateMessage] = useState("");
  const [search, setSearch] = useState("");
  const [qty, updateQty] = useState(0);
  const [addToCartItems, setaddCartItems] = useState([]);
  
  function getproduct() {
    fetch("http://localhost:1234/productlist")
      .then((response) => response.json())
      .then((data) => {http://localhost:1234/
        setproductList(data);
        //console.log(data)
      });
  }
  const deleteBrand = (id) => {
    axios.delete("http://localhost:1234/productlist/" + id).then((response) => {
      updateMessage(id + " Delete Successfully!");
      getproduct();
    });
  };

  const handleAddToCart = (itemId) => {
    // console.log("id", id);
    productlist.forEach((item) => {
      if (item.id === itemId) {
        item.addToCart = true;
      }
    }); 
    setaddCartItems(productlist.filter((item) => item.addToCart === true));
    updateQty(addToCartItems.length);
    console.log("added=>", addToCartItems);
  };


  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mt-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control  "
              placeholder="Search product"
              onChange={(obj) => setSearch(obj.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-2 mt-2 ">
          <div className="input-group-append ">
            <button className="btn text-success form-control" type="button">
              <select
                className="form-select"
                
              >
                <option>Filter</option>
                <option>Low to High</option>
                <option>High to low</option>
                <option>Rating</option>
              </select>
            </button>
          </div>
        </div>

        <div className="col-lg-2 mt-2">
          <div className="input-group-append">
          <Link to="/cart">
                <button className="btn text-warning form-control" type="button">
                  <i className="fa fa-shopping-cart "> {qty}</i>
                </button>
              </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-3 mb-3">
          <h3>Trending</h3>
          <p className="text-center text-danger">{message}</p>
        </div>
      </div>
      <div className="row gy-3 mb-3">
        {productlist
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (item.Name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            } else if (
              item.Category.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 grow">
                <div className="card h-100" key={item.id}>
                  <p className="text-dark card-text text-center">
                    <strong>{item.Name}</strong>
                  </p>

                  <img
                    className="card-img-top w-100 img-fluid"
                    src={item.Image}
                    height="100px"
                    alt={Image}
                  />
                  <div className="card-body card-bg">
                    <p className="text-dark card-text text-center">
                      <strong>Category:{item.Category}</strong>
                    </p>
                    <p className="text-dark card-text text-center">
                      <strong>{item.Discription} </strong>
                    </p>
                    <p className="text-dark card-text">
                      <strong className="m-4">Price:-{item.Price}</strong>
                      <strong>
                        <i className="fa fa-star text-warning"></i> Rating{" "}
                        {item.Rating} /5{" "}
                      </strong>

                      <p className="text-dark card-text">
                        <button
                          className="btn text-danger"
                          onClick={deleteBrand.bind(this, item.id, item.Name)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn text-primary   ">
                          <Link to={`/editproduct/${item.id}`}>
                            <i className="fa fa-pencil"></i>
                          </Link>
                        </button>
                        <button className="btn text-dark  ">
                          <i className="fa fa-heart"></i>
                        </button>
                        <button
                          className="btn text-warning "
                          id={`item${item.id}`}
                          onClick={() => handleAddToCart(item.id)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </button>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
