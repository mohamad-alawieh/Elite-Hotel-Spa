import React, { useState } from 'react'
import classes from "./HotelStatus.module.css";
import ReturnIcon from "../../assets/ReturnIcon.svg";
import Expand from "../../assets/Expand.svg";
import Status from "../../assets/Status.svg";
import RoomIcon from "../../assets/Room.svg";


const HotelStatus = () => {
  const [expandedCards, setExpandedCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
    card9: false,
    card10: false,
    card11: false,
  });

  // Toggle a specific card by updating the state
  const toggleCard = (card) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  // Function to open all cards
  const openAllCards = () => {
    setExpandedCards({
      card1: true,
      card2: true,
      card3: true,
      card4: true,
      card5: true,
      card6: true,
      card7: true,
      card8: true,
      card9: true,
      card10: true,
      card11: true,
    });
  };

  // Function to close all cards
  const closeAllCards = () => {
    setExpandedCards({
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      card5: false,
      card6: false,
      card7: false,
      card8: false,
      card9: false,
      card10: false,
      card11: false,
    });
  };
  return (
    <div className={classes.hotelStatus}>
    <div className={classes.bigCont}>
      <div className={classes.cardsCont}>
      <div className={classes.cardsContRow}>
      <div className={classes.card} onClick={() => toggleCard('card1')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" /> Room Type</p>
          <p className={classes.number}>1</p>
        </div>
        <div className={`${classes.table} ${expandedCards.card1 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead}>
            <p>CODE</p>
            <p>DESCRIPTION</p>
            <p>NO#</p>
            <p>OCC</p>
          </div>
          <div className={classes.tableRow}>
            <p>AS</p>
            <p>AMBASSADOR</p>
            <p>1</p>
            <p>-</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(245, 242, 252, 1)'}}>
            <p>IQ</p>
            <p>IRAQI</p>
            <p>1</p>
            <p>16</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(243, 253, 245, 1)'}}>
            <p>SW</p>
            <p>SWEDISH</p>
            <p>2</p>
            <p>4</p>
          </div>
        </div>
        
      </div>
      <div className={classes.card} onClick={() => toggleCard('card2')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" />Status</p>
          <p className={classes.number}>3</p>
        </div>
       <div  className={`${classes.table} ${expandedCards.card2 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead} style={{gridTemplateColumns:'35% 35% 25%'}}>
            <p>CODE</p>
            <p>DESCRIPTION</p>
            <p>NO#</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:'35% 35% 25%'}}>
            <p>OC</p>
            <p>OCCUPIED</p>
            <p>15</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:'35% 35% 25%',backgroundColor:'rgba(245, 242, 252, 1)'}}>
            <p>IQ</p>
            <p>IRAQI</p>
            <p>16</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:'35% 35% 25%',backgroundColor:'rgba(243, 253, 245, 1)'}}>
            <p>SW</p>
            <p>SWEDISH</p>
            <p>4</p>
          </div>
        </div>
        
      </div>
      </div>
      <div className={classes.cardsContRow}>
      <div className={classes.card}  onClick={() => toggleCard('card10')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" /> ARRIVAL FOR TODAY</p>
          <p className={classes.number}>3</p>
        </div>
        <div  className={`${classes.table} ${expandedCards.card10 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead}>
            <p>CODE</p>
            <p>DESCRIPTION</p>
            <p>NO#</p>
            <p>OCC</p>
          </div>
          <div className={classes.tableRow}>
            <p>AS</p>
            <p>AMBASSADOR</p>
            <p>1</p>
            <p>-</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(245, 242, 252, 1)'}}>
            <p>IQ</p>
            <p>IRAQI</p>
            <p>1</p>
            <p>16</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(243, 253, 245, 1)'}}>
            <p>SW</p>
            <p>SWEDISH</p>
            <p>2</p>
            <p>4</p>
          </div>
        </div>
        
      </div>
      <div className={classes.card}  onClick={() => toggleCard('card11')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" /> DEPARTURE FOR TODAY</p>
          <p className={classes.number}>1</p>
        </div>
        <div  className={`${classes.table} ${expandedCards.card11 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead} style={{gridTemplateColumns:'35% 35% 25%'}}>
            <p>GUEST NAME</p>
            <p>ROOM</p>
            <p>DEPARTURE</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:'35% 35% 25%'}}>
            <p>WISSAM AWALI</p>
            <p>606</p>
            <p>19-08-2024</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:'35% 35% 25%', backgroundColor:'rgba(245, 242, 252, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>606</p>
            <p>19-08-2024</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:'35% 35% 25%',backgroundColor:'rgba(243, 253, 245, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>606</p>
            <p>19-08-2024</p>
          </div>
        </div>
        
      </div>
      </div>
      <div className={classes.card} onClick={() => toggleCard('card3')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" />transfer ROOM</p>
          <p className={classes.number}>1</p>
        </div>
        <div  className={`${classes.table} ${expandedCards.card3 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead} style={{gridTemplateColumns:"20% 15% 15% 15% 15% 15%"}}>
            <p>GUEST NAME</p>
            <p>FROM ROOM</p>
            <p>FROM ROOM</p>
            <p>CAT</p>
            <p>SOURCE</p>
            <p>REASON</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"20% 15% 15% 15% 15% 15%"}}>
            <p>WISSAM AWALI</p>
            <p>607</p>
            <p>508</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"20% 15% 15% 15% 15% 15%",backgroundColor:'rgba(245, 242, 252, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>607</p>
            <p>508</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"20% 15% 15% 15% 15% 15%",backgroundColor:'rgba(243, 253, 245, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>607</p>
            <p>508</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
        </div>
        
      </div>
      <div className={classes.card} onClick={() => toggleCard('card4')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" />cancelled</p>
          <p className={classes.number}>1</p>
        </div>
        <div  className={`${classes.table} ${expandedCards.card4 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead} style={{gridTemplateColumns:"25% 17% 17% 17% 25% "}}>
            <p>GUEST NAME</p>
            <p> ROOM</p>
            <p>CAT</p>
            <p>SOURCE</p>
            <p>REASON</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"25% 17% 17% 17% 25% "}}>
            <p>WISSAM AWALI</p>
            <p>508</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"25% 17% 17% 17% 25% ",backgroundColor:'rgba(245, 242, 252, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>607</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"25% 17% 17% 17% 25% ",backgroundColor:'rgba(243, 253, 245, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>508</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
        </div>
        
      </div>
      <div className={classes.card}  onClick={() => toggleCard('card5')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" />GUEST IN HOUSE</p>
          <p className={classes.number}>15</p>
        </div>
        <div  className={`${classes.table} ${expandedCards.card5 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead} style={{gridTemplateColumns:"25% 17% 17% 17% 25% "}}>
            <p>GUEST NAME</p>
            <p> ROOM</p>
            <p>CAT</p>
            <p>SOURCE</p>
            <p>REASON</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"25% 17% 17% 17% 25% "}}>
            <p>WISSAM AWALI</p>
            <p>508</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"25% 17% 17% 17% 25% ",backgroundColor:'rgba(245, 242, 252, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>607</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
          <div className={classes.tableRow} style={{gridTemplateColumns:"25% 17% 17% 17% 25% ",backgroundColor:'rgba(243, 253, 245, 1)'}}>
          <p>WISSAM AWALI</p>
            <p>508</p>
            <p>DR</p>
            <p>BOOKING.COM</p>
            <p>DATE</p>
          </div>
        </div>
        
      </div>
      </div>
      <div className={classes.cardsCont}>
        
      <div className={classes.cardsContRow} style={{gridTemplateColumns:"43% 43%"}}>
      <div className={classes.button} onClick={openAllCards}>
        <img src={Expand} alt=""  style={{width:'11px',margin:"auto"}}/>
      </div>
      <div className={classes.button} onClick={closeAllCards}>
        <img src={ReturnIcon} alt=""  style={{width:'16px',margin:"auto"}}/>
      </div>
      </div>
      <div className={classes.card} onClick={() => toggleCard('card6')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" /> Nationality</p>
          <p className={classes.number}>3</p>
        </div>
       <div  className={`${classes.table} ${expandedCards.card6 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead}>
            <p>CODE</p>
            <p>DESCRIPTION</p>
            <p>NO#</p>
            <p>OCC</p>
          </div>
          <div className={classes.tableRow}>
            <p>AS</p>
            <p>LEBANESE</p>
            <p>3</p>
            <p>5</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(245, 242, 252, 1)'}}>
            <p>IQ</p>
            <p>IRAQI</p>
            <p>1</p>
            <p>16</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(243, 253, 245, 1)'}}>
            <p>SW</p>
            <p>SWEDISH</p>
            <p>2</p>
            <p>4</p>
          </div>
        </div>
        
      </div>
      <div className={classes.card} onClick={() => toggleCard('card7')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" />MARKET SEGMENT</p>
          <p className={classes.number}>3</p>
        </div>
        <div  className={`${classes.table} ${expandedCards.card7 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead}>
            <p>CODE</p>
            <p>DESCRIPTION</p>
            <p>NO#</p>
            <p>OCC</p>
          </div>
          <div className={classes.tableRow}>
            <p>02</p>
            <p>TOURISM</p>
            <p>15</p>
            <p>25</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(245, 242, 252, 1)'}}>
            <p>IQ</p>
            <p>IRAQI</p>
            <p>1</p>
            <p>16</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(243, 253, 245, 1)'}}>
            <p>SW</p>
            <p>SWEDISH</p>
            <p>2</p>
            <p>4</p>
          </div>
        </div>
        
      </div>
      <div className={classes.card} onClick={() => toggleCard('card8')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" /> Nationality</p>
          <p className={classes.number}>3</p>
        </div>
      <div  className={`${classes.table} ${expandedCards.card8 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead}>
            <p>CODE</p>
            <p>DESCRIPTION</p>
            <p>NO#</p>
            <p>OCC</p>
          </div>
          <div className={classes.tableRow}>
            <p>AS</p>
            <p>LEBANESE</p>
            <p>3</p>
            <p>5</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(245, 242, 252, 1)'}}>
            <p>IQ</p>
            <p>IRAQI</p>
            <p>1</p>
            <p>16</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(243, 253, 245, 1)'}}>
            <p>SW</p>
            <p>SWEDISH</p>
            <p>2</p>
            <p>4</p>
          </div>
        </div>
        
      </div>
      <div className={classes.card} onClick={() => toggleCard('card9')}>
        <div className={classes.cardHead}>
          <p className={classes.title}><img src={RoomIcon} className={classes.icon} alt="" />MARKET SEGMENT</p>
          <p className={classes.number}>3</p>
        </div>
        <div  className={`${classes.table} ${expandedCards.card9 ? `${classes.open}` : ''}`}>
          <div className={classes.tableHead}>
            <p>CODE</p>
            <p>DESCRIPTION</p>
            <p>NO#</p>
            <p>OCC</p>
          </div>
          <div className={classes.tableRow}>
            <p>02</p>
            <p>TOURISM</p>
            <p>15</p>
            <p>25</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(245, 242, 252, 1)'}}>
            <p>IQ</p>
            <p>IRAQI</p>
            <p>1</p>
            <p>16</p>
          </div>
          <div className={classes.tableRow} style={{backgroundColor:'rgba(243, 253, 245, 1)'}}>
            <p>SW</p>
            <p>SWEDISH</p>
            <p>2</p>
            <p>4</p>
          </div>
        </div>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default HotelStatus