import React from 'react'
import Card from '../card/card'
import './top-card-list.css'

const cardListData = [
    {
        username: '@JCR',
        id: 1,
        followers: '1596',
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
        name: 'facebook',
      },
      {
        username: '@JCR',
        id: 2,
        followers: '1596',
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
        name: 'facebook',
      }
];



function TopCardList() {
    return (
      <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
            {
              cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
            }
            </div>
        </div>
    </section>
  )
}

export default TopCardList