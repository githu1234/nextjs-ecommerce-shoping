import React from "react";

const Order = ({ subTotal }) => {
  return (
    <div>
      <section className="text-black-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-black-500 tracking-widest">
                CODESWEAR
              </h2>
              <h1 className="text-black-900 text-3xl title-font font-medium mb-4">
                Ordered Id:#788784
              </h1>
              <p className="leading-relaxed mb-4">
                Order has been placed successful
              </p>
              <div className="flex mb-4 text-center">
                <a className="flex-grow py-2 text-lg px-1 text-left">
                  Item Description
                </a>
                <a className="flex-grow py-2 text-lg px-1 text-center">
                  Item Quantity
                </a>
                <a className="flex-grow py-2 text-lg px-1 text-right ">
                  Price
                </a>
              </div>

              <div className="flex border-t border-black-200 py-2">
                <span className="text-black-500">wear the code xl/black</span>
                <span className="ml-auto text-black-900">1</span>
                <span className="ml-auto text-black-900">499</span>
              </div>
              <div className="flex border-t border-black-200 py-2">
                <span className="text-black-500">wear the code xl/red</span>
                <span className="ml-auto text-black-900">1</span>
                <span className="ml-auto text-black-900">499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-black-200 py-2">
                <span className="text-black-500">wear the code xl/white</span>
                <span className="ml-auto text-black-900">1</span>
                <span className="ml-auto text-black-900">499</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-black-900">
                  subtotal:₹{subTotal}
                </span>
              </div>
              <div className="my-4">
              <button className="flex mr-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://m.media-amazon.com/images/I/61pdK+XF7QL._UX679_.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
