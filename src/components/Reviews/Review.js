import React, { useState } from 'react';
import {FaQuoteLeft} from 'react-icons/fa';
import {css } from '@emotion/core';


const Review = () => {
  const reviews = {
    0: {
      client: "Liz Fernandez",
      quote: "LWT strives to provide travelers with exposure to unique and personalized experiences. Exposure to exciting locations, special moments and divine opportunities help us expand our understanding of the world and the people within it. I'm so grateful I was able to experience Spain differently on this recent trip. I have traveled to this beautiful country many times and NEVER have I felt the joy, excitement and enthusiasm I felt for the people, the land, the culture, and of course, the food like I did until I traveled with Latino World Travelers. Vanessa has a unique vision and her effort, passion and perseverance could very well transform the travel world for all who take her lead."
    },
    1: {
      client: "Dee Hill",
      quote: "This was an outstanding travel experience highlighted by the mystical/festive Day of the Dead celebration in Mixquic, which made me feel like I was in the midst of a National Geographic special due to its colorfulness, authenticity, and world culture significance. It was the pinnacle of an action-packed weekend filled with great food & great experiences. Enjoyed traveling in a small group and having some cool people to experience things with. Loved our cute hotel too. The employees there made us feel like we were at home!! Itinerary, food, travel & transportation were all top-notch. A+ to Latino World Travelers for putting it all together."
    },
    2: {
      client: "Linda Rivera",
      quote: "Our host Vanessa was a wonder! She did an excellent job communicating our itinerary, additionally she made it a priority to make sure all travelers were on time. Vanessa was also very accommodating with all traveler's needs and was very helpful to finding a solution, if she did not have an immediate answer. Most importantly Vanessa's energy was vibrant and contagious which definitely made the trip extremely comforting and authentic. This was my first experience traveling with a group and I must say it was life-changing! I am truly grateful for the experience and friendships made! Looking forward to my next trip with Latino World Travelers!"
    },
    3: {
      client: "Kenyatta Adams",
      quote: "I had a wonderful time in Mexico City for Dia de Los Muertos. Vanessa did an amazing job organizing the trip, from beautiful lodging to fun activities. The food was AMAZING and tour guides were very friendly and informative. We stayed in the neighborhood Coyoacan, a great neighborhood for walking/sightseeing and fun and trendy things to do. We were fortunate enough to be very close to Coyoacan Market where it has everything you could possibly imagine. I'm looking forward to my next trip with Latino World Travelers."
    },
  }

  const [current, setCurrent] = useState(reviews[0])
  const [active, setActive] = useState(0)

  const handleSetClick = (event) => {
    setCurrent(reviews[event.target.getAttribute("data-review")])
    setActive(event.target.getAttribute("data-review"))
  }


  return (
    <div 
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px auto;
        max-width: 70rem;
        background-color: rgba(255, 255, 255, .8);
        width: 70vw;
        padding: 3rem;

        p {
          text-align: center;
          margin-bottom: 2rem;
          color: rgb(80, 80, 80);
          font-size: 1.3rem;
          padding: 0 2rem;
        }
    `}>
      <div className=''>
        <div>
          <p>{current.quote}</p>
          <p>{current.client}</p>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          

          span {
            height: 2rem;
            width: 2rem;
            margin: 0 .3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          span::before {
            content: "";
            height: .6rem;
            width: .6rem;
            background-color: #d4d4d4;
            border-radius: 5rem;
            transition: background-color .3s ease;
          }

          span:hover::before {
            background-color: #22aae6;
          }

          span[data-review="${active}"]::before {
            background-color: #22aae6;
          }
        `}
      >
        {Object.keys(reviews).map(index => (
          <span 
            onClick={event => handleSetClick(event)}
            data-review={index}
            key={index}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Review