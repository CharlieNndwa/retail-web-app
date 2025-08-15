import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd mb-0">Your Cart</h2>
              <p>
                There are <b>3</b> products in your cart
              </p>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                </table>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://www.makro.co.za/asset/rukmini/fccp/416/416/ng-fkpublic-ui-user-fbbe/drinks-juice/l/f/1/5-orange-flavoured-fruit-squash-box-1-plastic-bottle-oros-original-imaheh79snedgakn.jpeg?q=70"
                              alt=""
                              className="w-100"
                            />
                          </div>

                          <div className="info px-3">
                            <h6>Oros Orange Flavor 5L</h6>
                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly/>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </div>
            </div>

            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
