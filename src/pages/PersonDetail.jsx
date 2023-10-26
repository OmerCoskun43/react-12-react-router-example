import { useEffect } from "react";
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import NotFound from "./NotFound";

const PersonDetail = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  //   const { state: person } = useLocation();
  //   const { first_name, last_name, avatar } = person;
  //   console.log(state);
  const url = `https://reqres.in/api/users/${id}`;
  const getPerson = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  };
  //   console.log(data);

  useEffect(() => {
    getPerson();
  }, []);

  if (error) {
    return <NotFound />;
  } else if (!data) {
    return (
      <div className="text-center text-danger fs-3 fw-bold">
        <h3>Data Loading...</h3>
      </div>
    );
  } else {
    return (
      <div key={id} className="text-center mt-4">
        <img className="rounded" src={data.avatar} alt="img" />
        <h6 className="mb-3">
          {data.first_name} {data.last_name}
        </h6>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-success p-3"
        >
          Go Home
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-danger p-3"
        >
          {" "}
          Go Back
        </button>
      </div>
    );
  }
};

export default PersonDetail;
