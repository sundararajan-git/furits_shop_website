import React, { useContext, useState } from "react";
import "./Cart.css";
import { useFetchCollection } from "../../hook/useFetchCollection";
import { useFirestore } from "../../hook/useFirestore";
import Footer from "../../component/footer/Footer";
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const state = useContext(AuthContext);
  const { documents, isloading, Err } = useFetchCollection(
    state.user ? `${state.user.uid}cartlist` : "cart"
  );
  const { deleteDocument } = useFirestore(
    state.user ? `${state.user.uid}cartlist` : "cart"
  );
  const removeHandle = (id) => {
    deleteDocument(id);
  };
  return (
    <div className="cartcontainer">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              Removed your cart
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
      {isloading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div id="height">
            <h4 className="carth4">Cart Lists</h4>
            <div className="container cartlist">
              {documents[0] ? (
                documents.map((item) => {
                  return (
                    <div className="cart" key={item.id}>
                      <div>
                        <img src={item.imgURL} alt="img" loading="lazy" />
                      </div>
                      <section>
                        <p>{item.title}</p>
                        <p>{` ${"\u20B9"}${item.price} / ${
                          item.quantity
                        } Kg`}</p>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => removeHandle(item.id)}
                        >
                          <i className="fa-regular fa-lg fa-trash-can"></i>
                        </button>
                        <span> </span>
                        <button>
                          <i className="fa-solid fa-wallet fa-lg"></i>
                        </button>
                      </section>
                    </div>
                  );
                })
              ) : (
                <div className="empty">
                  <img
                    src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
                    id="cartimg"
                  />
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Cart;
