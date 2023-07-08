import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "../../component/carousel/Carousel";
import Offer from "../../component/offer/Offer";
import Furits from "../../component/furits/Furits";
import { useFetchCollection } from "../../hook/useFetchCollection";
import { useFirestore } from "../../hook/useFirestore";
import Footer from "../../component/footer/Footer";

const Home = () => {
  const { documents, isloading } = useFetchCollection("furits");
  const { updateDocument } = useFirestore("furits");
  useEffect(() => {
    documents.map((item) => {
      updateDocument(item.id, {
        ...item,
        price: item.orginalprice,
        quantity: 1,
      });
    });
  }, [isloading]);
  return (
    <div>
      {isloading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <section>
            <Carousel />
          </section>
          <main>
            <section>
              <Offer />
            </section>
            <section>
              <Furits />
            </section>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
