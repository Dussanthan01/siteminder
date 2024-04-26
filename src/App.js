
import React, { useState } from 'react';
import { RoomTable } from './components/RoomTable'; 
import { Check } from './components/Check'; 
import { FullScreen } from './components/FullScreen'; 

function App() {
  const [showRoomTable, setShowRoomTable] = useState(false); 
  const [showCheck, setShowCheck] = useState(false); 
  const [showFullScreen, setShowFullScreen] = useState(false); 

  const handleRoomTableClick = () => {
    setShowRoomTable(!showRoomTable); 
    setShowCheck(false); 
    setShowFullScreen(false); 
  };

  const handleCheckClick = () => {
    setShowCheck(!showCheck); 
    setShowRoomTable(false); 
    setShowFullScreen(false); 
  };

  const handleFullScreenClick = () => {
    setShowFullScreen(!showFullScreen); 
    setShowRoomTable(false); 
    setShowCheck(false); 
  };

  return (
    <div>
      <a class="mybookingengine" href="https://direct-book.com/properties/bridgeparkdirect">Book</a>{/*Advanced Users: Activating an Element*/}
      <br></br>
      <br></br>
      <a class="ibe" href="https://direct-book.com/properties/bridgeparkdirect">Book</a>{/*Widget Customisation Options*/}
      <br></br>
      <br></br>
      <a class="ibe" data-query-promotion_code="testpromo" href="https://direct-book.com/properties/bridgeparkdirect">Book</a>{/*Date Picker Widget Customisation*/}
      <br></br>
      <br></br>
      <a class="ibe" href="https://direct-book.com/properties/bridgeparkdirect/book">Form</a>{/*booking details filling form*/}
      <br></br>
      <br></br>
      
      <button onClick={handleRoomTableClick}>Grid</button> {/*Create Links and Widgets to The Booking Engine*/}
      <br></br>
      <br></br>
      <button onClick={handleCheckClick}>Check Availability</button> {/*Create Links and Widgets to The Booking Engine*/}
      <br></br>
      <br></br>
      <button onClick={handleFullScreenClick}> embed page</button>{/*Create Links and Widgets to The Booking Engine*/} 
      <br></br>
      <br></br>
      {showRoomTable && <RoomTable />} 
      {showCheck && <Check />} 
      {showFullScreen && <FullScreen />} 
    </div>
  );
}

export default App;
