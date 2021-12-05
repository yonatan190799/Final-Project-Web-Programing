import { Link } from "react-router-dom";
import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
          <div className="card">
            <div className="card-header">
              <h3><strong>--LYRIC FINDER--</strong> version 1.0.0</h3>
              <p>
                <strong>--LYRIC FINDER--</strong> merupakan aplikasi pencari lirik serta menampilkan informasi tentang lirik yang dicari.
              </p>
            </div>
          <div className="card-body mb-5">
          <p>Nama: Mamahit, Yonatan Putra
            <br/> NIM: 105021710052
            <br/> Program Studi: Informatika
            <br/> Mata Kuliah: Web Programing
          </p>
          </div>
        </div>
      </div>
    )
  }
}
export default About;