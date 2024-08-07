import React, { useState } from "react";
import styled from "styled-components";
import AARYA from "../assets/AARYA Web series.jpg";
import Friends from "../assets/Which _Friends_ Character Are You_.jpg";
import tzp from "../assets/tzp.jpg";
import Exorcist1 from "../assets/Exorcist1.jpg";
import Devdas from "../assets/Devdas.jpg";
import COLLATERAL from "../assets/COLLATERAL.jpg";
import movie from "../assets/movie.png";
import pop from "../assets/pop1.png";
import film from "../assets/film.png";

export default function Recommend() {
  const data = [
    {
      image: AARYA,
      title: "AARYA",
      subTitle: "Indian crime-thriller drama staring Shushmita Sen and many phenomenal actors.",
      cost: "3 Seasons",
      duration: "34-59 min",
      category: ["Highly Rated", "New & Trendy","Family Movies"],
    },
    {
      image: Friends,
      title: "Friends",
      subTitle: "1994 Sitcom well known for its witty one-liners and hilarious jokes.",
      cost: "10 Seasons",
      duration: "25-30 mins",
      category: ["Highly Rated","Family Movies"],
    },
    {
      image: tzp,
      title: "Taare Zameen Par",
      subTitle: "Also known as Stars on Earth, is a 2007 Indian Language Drama.",
      cost: "Movie",
      duration: "2h 44m",
      category: ["Highly Rated", "New & Trendy","Family Movies"],
    },
    {
      image: Exorcist1,
      title: "The Exorcist",
      subTitle: "A 1973 American supernatural horror film directed by William Friedkin.",
      cost: "Movie",
      duration: "2h 2m",
      category: ["Sci-fi & Fantasy","Family Movies"],
    },
    {
      image: Devdas,
      title: "Devdas",
      subTitle: "Based on the 1917 novel, a 2002 Romance/Musical staring Shahrukh khan, Madhuri Dixit, Aishwarya Rai. ",
      cost: "Movie",
      duration: "3h 5m",
      category: ["Highly Rated", "New & Trendy","Family Movies"],
    },
    {
      image: COLLATERAL,
      title: "COLLATERAL",
      subTitle: "A 2004 American neo-noir action thriller film.",
      cost: "Movie",
      duration: "2h",
      category: ["Highly Rated","Family Movies"],
    },
  ];

  const packages = [
    "Family Movies",
    "Sci-fi & Fantasy",
    "Highly Rated",
    "New & Trendy",
  ];

  const [active, setActive] = useState(1); // Initialize with a different index that means
  //1 here is for family Movies 2 for Sci-fi and fantasy and 3 for highly and so on 

  const filteredData = data.filter((item) => item.category.includes(packages[active - 1]));

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Movies & Series</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={active === index + 1 ? "active" : ""}
              onClick={() => setActive(index + 1)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {filteredData.map((destination, index) => (
          <div className="destination" key={index}>
            <img src={destination.image} alt={destination.title} />
            <h3>{destination.title}</h3>
            <p>{destination.subTitle}</p>
            <div className="info">
              <div className="services">
                <img src={movie} alt="Movie icon" />
                <img src={pop} alt="Popcorn icon" />
                <img src={film} alt="Film icon" />
              </div>
              <h4>{destination.cost}</h4>
            </div>
            <div className="distance">
              <span>{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .title h2 {
    color: red;
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-weight: bold;
    color: white;

    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .active {
        border-bottom: 0.5rem solid red;
      }
    }
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;

    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #e6e6fa;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      img {
        width: 100%;
      }

      .info {
        display: flex;
        align-items: center;

        .services {
          display: flex;
          gap: 0.4rem;

          img {
            border-radius: 1rem;
            background-color: #ebf4fa;
            width: 2rem;
            padding: 0.3rem 0.4rem;
          }
        }

        justify-content: space-between;
      }

      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }

        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }

    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
