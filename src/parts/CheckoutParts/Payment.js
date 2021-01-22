import React from 'react'
import { InputText, InputFile } from "elements/Form";
import Fade from 'react-reveal/Fade';

import logoBCA from 'assets/dist/icon/logo-bca.png';
import logoBRI from 'assets/dist/icon/logo-bri.png';
export default function Payment(props) {

    const { data, ItemDetails, checkout } = props;
    
    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;

    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center align-item-center">
                    <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
                        <Fade delay={300}>
                            <p className="mb-4">Transfer Pembayaran:</p>
                            <p>Tax: {tax}%</p>
                            <p>Sub Total: ${subTotal} USD</p>
                            <p>Total: ${grandTotal} USD</p>
                            <div className="row mt-4">
                                <div className="col-3 text-right">
                                    <img src={logoBCA} alt="Bank Central Area" width="60" />
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Central Asia</dd>
                                        <dd>2209 1892</dd>
                                        <dd>Rades Pratama</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-right">
                                    <img src={logoBRI} alt="Bank Rakyat Indonesia" width="60" />
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Rakyat Indonesia</dd>
                                        <dd>3942 2000</dd>
                                        <dd>Rades Pratama</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-5 py-5" style={{ paddingLeft: 80}}>
                        <Fade delay={600}>
                            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                            <InputFile 
                                accept="image/*"
                                id="proofPayment"
                                name="proofPayment"
                                value={data.proofPayment}
                                onChange={props.onChange}
                            />

                            <label htmlFor="bankFrom">Asal Bank</label>
                            <InputText 
                                id="bankFrom"
                                name="bankFrom"
                                type="text"
                                value={data.bankFrom}
                                onChange={props.onChange}
                            />

                            <label htmlFor="accountHolder">Nama Pengirim</label>
                            <InputText 
                                id="accountHolder"
                                name="accountHolder"
                                type="text"
                                value={data.accountHolder}
                                onChange={props.onChange}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
