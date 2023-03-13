import { Modal } from "antd";
import React from "react";
import BillContainer from "../../../containers/bill-containers/print-bill-modal";

export default function PrintBill(props) {
  return (
    <Modal
      title="Print Bill"
      open={props.isModalOpen}
      footer={false}
      onCancel={props.onCancel}
      onOk={props.onOk}
      width={800}
    >
      <BillContainer customer={props.customer} />
    </Modal>
  );
}
