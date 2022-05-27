import React from 'react';
import Form from 'react-bootstrap/Form'

function Forms() {

    return (
        <div className='col-12'>
            <div className="mb-0 row border formPlace" style={{background: `rgba(249,250,252,1)`}}>
                <label htmlFor="staticEmail" style={{marginTop: 15}} className="col-sm-2 col-form-label textSelect">Wybierz typ raportu</label>
                <div className="col-sm-5 ">
                    <select className='form-select border2' style={{ width: "200px", marginTop: 10 ,height: "40px"}}>
                        <option value="grejpfrutowy" className='textSelect'>Raport szczegółowy</option>
                        <option value="limonkowy" className='textSelect'>Hotbilling</option>
                        <option value="kokosowy" className='textSelect'>Billing</option>
                        <option value="mango" className='textSelect'>Zużycie pakietów</option>
                    </select>
                </div>
            </div>
            <div className="mb-0 row border formPlace" >
                <label htmlFor="staticEmail2"  style={{ marginTop: 15}} className="col-sm-2 col-form-label textSelect" >Wybierz konto</label>
                <div className="col-sm-5">
                    <select className='form-select border2' style={{ width: "200px" , marginTop: 10, height: "40px"}}>
                        <option value="grejpfrutowy" className='textSelect'>123213</option>
                        <option value="limonkowy" className='textSelect'>2131231</option>
                        <option value="kokosowy" className='textSelect'>312312</option>
                        <option value="mango" className='textSelect'>311231</option>
                    </select>
                </div>
            </div>
            <div className="mb-0 row border formPlace">
                <label htmlFor="inputPassword" style={{ marginTop: 15}} className="col-sm-2 col-form-label textSelect">Wpisz nr MSISDN</label>
                <div className="col-sm-5">
                    <input type="text" style={{ width: "200px",  marginTop: 15}} className="form-control textSelect" id="inputPassword"/>
                </div>
            </div>
            <div className="mb-0 row border formPlace">
                <label htmlFor="inputPassword2"  style={{ marginTop: 15}} className="col-sm-2 col-form-label textSelect">Data od</label>
                <div className="col-sm-3">
                    <input type="date" style={{ width: "200px", marginTop: 15}} className="form-control textSelect" id="inputPassword2"/>
                </div>
                <label htmlFor="inputPassword3"  style={{ marginTop: 15}} className="col-sm-2 col-form-label textSelect">Data do</label>
                <div className="col-sm-3">
                    <input type="date" style={{ width: "200px",  marginTop: 15}} className="form-control textSelect" id="inputPassword3"/>
                </div>
            </div>
            <div className="mb-0 row border formPlace">
                <label className="container2">SMS
                    <input type="checkbox" defaultChecked={true}/>
                    <span className="checkmark2"></span>
                </label>
                <label className="container2">MMS
                    <input type="checkbox" defaultChecked={true}/>
                    <span className="checkmark2"></span>
                </label>
                <label className="container2">GPRS
                    <input type="checkbox" defaultChecked={true}/>
                    <span className="checkmark2"></span>
                </label>
                <label className="container2">Rozmowa międzynarodowa
                    <input type="checkbox" defaultChecked={true}/>
                    <span className="checkmark2"></span>
                </label>
                <label className="container2">Roaming
                    <input type="checkbox" defaultChecked={true}/>
                    <span className="checkmark2"></span>
                </label>
                <label className="container2">Inne
                    <input type="checkbox" defaultChecked={true}/>
                    <span className="checkmark2"></span>
                </label>
            </div>
            <div className="mb-0 row border formPlace">
                <label className="container2">ZAZNACZ/ODZNACZ WSZYSTKO
                    <input type="checkbox" defaultChecked={true}/>
                    <span className="checkmark2"></span>
                </label>
                <label className="container2">Generuj plik Excel (pełne dane)
                    <input type="checkbox" defaultChecked={false}/>
                    <span className="checkmark2"></span>
                </label>
            </div>
            <div className="mb-0 row border buttonPanel">
                <div className="col-sm-9">
                    <button className='button'>Powrót</button>
                </div>
                <div className="col-sm-1">
                    <button className='button2'>Wyszukaj</button>
                </div>
            </div>
        </div>)
}


export default Forms
