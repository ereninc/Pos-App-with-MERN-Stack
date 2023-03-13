import { Button } from "antd";
import React, { useRef } from "react";
import BillDetails from "../print-bill-details";
import ReactToPrint from "react-to-print";

export default function BillContainer({ customer }) {
  const componentRef = useRef(null);

  return (
    <div>
      <section className="py-20 bg-black" ref={componentRef}>
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">ex-Pos</h2>
            </div>
            <div className="bill-details">
              <BillDetails customer={customer} />
            </div>
            <div className="bill-table-area mt-6">
              <table className="min-w-full divide-y text-left divide-slate-500 overflow-hidden">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-4 text-left font-sm text-slate-700 sm:table-cell hidden"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-4 text-left font-sm text-slate-700"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="py-4 text-left font-sm text-slate-700"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-4 text-left font-sm text-slate-700"
                    >
                      Piece
                    </th>
                    <th
                      scope="col"
                      className="py-4 text-left font-sm text-slate-700"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customer.cartItems.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td className="py-4 sm:table-cell hidden">
                          <img
                            src={item.productImage}
                            alt="product"
                            className="w-14 h-14 object-cover"
                          />
                        </td>
                        <td className="py-4">{item.productName}</td>
                        <td className="py-4">${item.productPrice}</td>
                        <td className="py-4">{item.quantity}</td>
                        <td className="py-4">
                          ${item.productPrice * item.quantity}
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://picsum.photos/200/300"
                        alt="product"
                        className="w-14 h-14 object-cover"
                      />
                    </td>
                    <td className="py-4">Product Name 1</td>
                    <td className="py-4">$123</td>
                    <td className="py-4">321</td>
                    <td className="py-4">$231</td>
                  </tr>
                  <tr>
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://picsum.photos/200/300"
                        alt="product"
                        className="w-14 h-14 object-cover"
                      />
                    </td>
                    <td className="py-4">Product Name 2</td>
                    <td className="py-4">$321</td>
                    <td className="py-4">123</td>
                    <td className="py-4">$231</td>
                  </tr> */}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-2 sm:table-cell hidden"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2 text-slate-700">Sub Total</td>
                    <td className="py-2 text-slate-500">
                      ${customer.subTotal}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 sm:table-cell hidden"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2 text-slate-700">Taxes</td>
                    <td className="py-2 text-red-600">
                      +${(customer.subTotal * customer.tax) / 100}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 sm:table-cell hidden"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2 font-bold text-slate-700">Total</td>
                    <td className="py-2 font-bold text-slate-700">
                      $
                      {customer.subTotal +
                        (customer.subTotal * customer.tax) / 100}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="py-2">
                <div className="border-t border-slate-500 py-4">
                  <p className="text-sm font-light text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    asperiores consectetur accusantium dolore, modi
                    reprehenderit quaerat, veritatis quae corrupti commodi quod
                    porro beatae inventore ipsum, ea odio sunt perferendis
                    autem! Aspernatur maiores tenetur veritatis cupiditate, enim
                    illo nulla. Minus, nemo repellendus alias inventore
                    perferendis aut incidunt doloribus sint aperiam iusto eaque
                    excepturi at expedita eum animi accusamus, impedit nulla
                    officia.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-8">
        <ReactToPrint
          trigger={() => {
            return (
              <Button type="primary" size="large">
                Print
              </Button>
            );
          }}
          content={() => componentRef.current}
          documentTitle="new document"
          pagestyle="print"
        />
      </div>
    </div>
  );
}
