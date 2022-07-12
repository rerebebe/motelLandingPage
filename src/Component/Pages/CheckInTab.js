function CheckInTab() {
  return (
    <div className="CheckInTab" ab>
      <div className="CheckInTabContent">
        <label htmlFor="checkin">Check In</label>
        <input type="date" name="checkin"></input>
      </div>
      <div className="CheckInTabContent">
        <label htmlFor="checkout">Check Out</label>
        <input type="date" name="checkout"></input>
      </div>
      <div className="CheckInTabContent">
        <label htmlFor="roomnumber">Room</label>
        <select name="roomnumber" id="roomnumber">
          <option value="101">101</option>
          <option value="102">102</option>
          <option value="202">202</option>
        </select>
      </div>
      <div className="CheckInTabContent">
        <label htmlFor="Adult">Adult</label>
        <select name="Adult" id="Adult">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="CheckInTabContent">
        <label htmlFor="children">Children</label>
        <select name="children" id="children">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div>
        <button className="CheckinButton">CHECK IN</button>
      </div>
    </div>
  );
}

export default CheckInTab;
