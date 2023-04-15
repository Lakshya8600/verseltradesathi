import React from 'react'
import { useState } from 'react';
import ReactGA from 'react-ga4'

export default function Mainbody() {
  const TRACKING_ID = 'G-40T38022RG'
  ReactGA.initialize(TRACKING_ID)
  ReactGA.send({hitType:"pageview" , page:'/'})

  const [pt7, setpt7] = useState([]);
  const [per2, setper2] = useState([]);
  const [vwap, setvwap] = useState([]);
  const [rsi30, setrsi30] = useState([]);
  const [rsi70, setrsi70] = useState([]);

  let serverLink = "https://kumrawatyogesh.pythonanywhere.com"
  let server1 = "https://kumrawatyogesh.pythonanywhere.com"
  let server2 = "https://yogeshkumarawat.pythonanywhere.com"

  var d = new Date(); 
  console.log(d.getMinutes())

  if (12 >= d.getHours >= 9) {
    serverLink = server1
  }
  else{
    serverLink = server2
  }
  console.log(serverLink)

  setInterval(() => {
    d = new Date();
    if (12 >= d.getHours >= 9) {
      serverLink = server1
    }
    else{
      serverLink = server2
    }

    let za = fetch(serverLink + "/getsuddenpt7")
    za.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setpt7(varia)
      })
    let zb = fetch(serverLink + "/getsudden2per")
    zb.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setper2(varia)
      })
    let zc = fetch(serverLink + "/getvwap")
    zc.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setvwap(varia)
      })
    let zd = fetch(serverLink + "/getrsi30")
    zd.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi30(varia)
      })
    let ze = fetch(serverLink + "/getrsi70")
    ze.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi70(varia)
      })
  }, 60000);

  {
    let za = fetch(serverLink + "/getsuddenpt7")
    za.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setpt7(varia)
      })
    let zb = fetch(serverLink + "/getsudden2per")
    zb.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setper2(varia)
      })
    let zc = fetch(serverLink + "/getvwap")
    zc.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setvwap(varia)
      })
    let zd = fetch(serverLink + "/getrsi30")
    zd.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi30(varia)
      })
    let ze = fetch(serverLink + "/getrsi70")
    ze.then(res =>
      res.json()).then(d => {
        if (d === "") { d = "#No Stock Found" }
        let varia = d.split("#")
        varia.shift()
        varia.sort()
        setrsi70(varia)
      })
  }


  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <a className="navbar-brand" href="#home">TradeSathi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#listcontainer">Tools</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>

          </ul>

        </div>
      </nav>
      {/* 
      <div class="b-example-divider"></div> */}
      <div class="container col-xxl-8 px-4 py-5" id="home">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://iili.io/HkWMtne.md.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Find 100+ Stocks At Right Time</h1>
            <p class="lead">Trade sathi helps you find intraday stocks at the Right Time, You can quickly find stocks having specific technical indication like they are near vwap , etc. Explore the website to know more. </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2"><a href="#listcontainer" style={{ color: "white" }}>Scanners</a></button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4"><a href="#contact">Contact </a></button>
            </div>
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>

      <div className="listcontainer" id='listcontainer'>
        <div className="resultList">
          <ul className="list-group">
            <span>Stocks making Sudden Change of 0.7% </span>
            {pt7.map((artist) => (
              <li className="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul className="list-group">
            <span>Stocks making Sudden Change of 2% </span>
            {per2.map((artist) => (
              <li className="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul className="list-group">
            <span>Near VWAP</span>
            {vwap.map((artist) => (
              <li className="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul className="list-group">
            <span>Very low RSI</span>
            {rsi30.map((artist) => (
              <li className="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
        <div className="resultList">
          <ul className="list-group">
            <span>Very High RSI</span>
            {rsi70.map((artist) => (
              <li className="list-group-item">{artist}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div class="b-example-divider"></div>
      <div class="b-example-divider"></div>
      <div class="b-example-divider"></div> */}

      <div class="px-4 pt-5 my-5 text-center border-bottom" id='contact'>
        <h1 class="display-4 fw-bold">Known For Creating Profits</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Trusted by many people to provide reliable information and create profit opportunities for traders, We are completely an independent organisation solely made for traders accross India.</p>
          <h3>Email - lakshyakumrawatbusiness@gmail.com</h3>
          {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div> */}
        </div>
        <div class="overflow-hidden ahah" >
          <div class="container px-5">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Exampleimage" loading="lazy" width="700" height="500" />
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>

      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#home" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link px-2 text-muted">Contact</a></li>
            <li class="nav-item"><a href="#listcontainer" class="nav-link px-2 text-muted">scanners</a></li>
          </ul>
          <p class="text-center text-muted">© 2023 Tradesathi</p>
        </footer>
      </div>




    </div>
  )
}
