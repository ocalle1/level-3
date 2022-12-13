import React, {useState} from 'react';
import './App.css';
import Badge from './Components/Badge';
import DataEntry from './Components/DataEntry'



export default function App() {
  const [dataOne, setData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      comment: ""
    }
  )
  const [badges, setBadges] = useState([])

  function handleChange(event) {
    const { name, value } = event.target
    setData(prevData => (
      {
        ...prevData,
        [name]: value

      }
    )
    )

  }

  function handleSubmit(event) {
    event.preventDefault()
    setBadges(prevBadges => [
      ...prevBadges,
      {
        firstName: dataOne.firstName,
        lastName: dataOne.lastName,
        email: dataOne.email,
        placeOfBirth: dataOne.placeOfBirth,
        phone: dataOne.phone,
        favoriteFood: dataOne.favoriteFood,
        comment: dataOne.comment
      }

    ]
    )
  }

  return (
    <div>

      <DataEntry
        dataOne={dataOne}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {badges.map(badge => {
        return (
          <Badge
            {...badge}
            // key={badge.firstName}
          />
        )
      }
      )
      }
    </div>
  )
};
