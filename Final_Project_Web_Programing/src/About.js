import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container pt-5 pb-5">
        <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
          <div className="card">
            <div className="card-header bg-light">
              <h3><strong>--LYRIC FINDER--</strong> version 1.0.0</h3>
              <p>
                <strong>--LYRIC FINDER--</strong> merupakan aplikasi pencari lirik serta menampilkan informasi tentang lirik yang dicari.
              </p>
            </div>
          <div className="card-body pb-5 pt-5 bg-dark text-white">
          <p>Nama: Mamahit, Yonatan Putra
            <br/> NIM: 105021710052
            <br/> Program Studi: Informatika
            <br/> Mata Kuliah: Web Programing
          </p>
          </div>
        </div>
      </div>
    );
}
export default About;