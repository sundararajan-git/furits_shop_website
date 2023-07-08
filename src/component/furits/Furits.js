import React, { useContext, useState } from "react";
import "./Furits.css";
import { useFetchCollection } from "../../hook/useFetchCollection";
import { useFirestore } from "../../hook/useFirestore";
import { AuthContext } from "../../context/AuthContext";

const Furits = () => {
  const { documents } = useFetchCollection("furits");
  const [btncolor, setBtncolor] = useState(null);
  const { updateDocument } = useFirestore("furits");
  const state = useContext(AuthContext);
  const { addDocument } = useFirestore(
    state.user ? `${state.user.uid}cartlist` : "cart"
  );
  const decQuantity = (id) => {
    documents.map((item) => {
      if (item.price > item.orginalprice) {
        if (item.id === id) {
          updateDocument(id, {
            ...item,
            price: item.price - item.orginalprice,
            quantity: item.quantity - 1,
          });
        }
      }
    });
  };
  const incQuantity = (id) => {
    documents.map((item) => {
      if (item.id === id) {
        updateDocument(id, {
          ...item,
          price: item.price + item.orginalprice,
          quantity: item.quantity + 1,
        });
      }
    });
  };
  const addCart = (item) => {
    if (state.user) {
      setBtncolor(true);
      addDocument(item);
    } else {
      setBtncolor(false);
    }
  };
  return (
    <div className="furits container">
      <h4>Furits</h4>
      <br />
      <div className="gridfurits text-center">
        {documents.map((item) => {
          return (
            <section key={item.id}>
              <img src={item.imgURL} alt={item.title} loading="lazy" />
              <div className="row-1">
                <p>{item.title}</p>
                <p>{` ${"\u20B9"}${item.price} / ${item.quantity} Kg`}</p>
              </div>
              <div className="row-2">
                <button
                  type="button"
                  className={"Addbtn"}
                  id={"color"}
                  onClick={() => addCart(item)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <div>
                  <button
                    className="Decbtn"
                    onClick={() => decQuantity(item.id)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span> </span>
                  <button
                    className="Incbtn"
                    onClick={() => incQuantity(item.id)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              {btncolor ? (
                <div
                  className="modal fade text-start"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  id="exampleModal1"
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        Added your cart
                        <button
                          type="button"
                          class="btnclose btn "
                          data-bs-dismiss="modal"
                          id="close"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="modal fade text-start"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  id="exampleModal1"
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        Please sign in
                        <button
                          type="button"
                          className="btnclose btn "
                          data-bs-dismiss="modal"
                          id="close"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Furits;
