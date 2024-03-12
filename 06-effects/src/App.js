import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';

function App() {

  const [shops, setShops] = useState([]);
  const [events, setEvents] = useState([]);

  const loadShops = async () => {
    const response = await axios.get('json/shops.json');
    setShops(response.data);
  }

  // useEffect takes two argument
  // - first argument is a callback function
  // - second argument is an array of state variables to watch.
  //   if any state variable in the array changes, the callback function (i.e first argument)
  //   will be called. If the array is empty, the callback function will be
  //   called ONCE after the first render
  useEffect(()=>{
    
    const loadShopData = async() => {
      const response = await axios.get('json/shops.json');
      setShops(response.data);
    }

    loadShopData();

    // (async() => {
    //     const response = await axios.get('json/shops.json');
    //     setShops(response.data);
    //   })();

  }, [])

  useEffect(()=>{

    const loadEvents = async() => {
      const response = await axios.get("json/events.json");
      setEvents(response.data);
    }

    loadEvents();

  },[])
  
  return (
    <div className="container">
      <h1>Shop Directory</h1>
      <button onClick={loadShops}>Load Shops</button>
      <ul>
        {
          shops.map((shop, index)=>{
            return <li key={index}>{shop}</li>
          })
        }
      </ul>
      <h1>Events</h1>
      {
        events.map((event, index)=>{
          return <div className="card" key={index}>
              <div className="card-body">
                <div className="card-title">
                  {event.name}
                </div>
                <p>Date: {event.date}</p>
              </div>
            </div>
        })
      }
    </div>
  );
}

export default App;
