import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const shops = [
    "McDonalds",
    "KFC",
    "Burger King",
    "Chick fil A",
    "Jollibee"
  ];

  const events = [
    {
      "title": "Taylor Swift Meet and Greet",
      "date": "21st June 2029",
      "time": "3pm"
    },
    {
      "title": "Lucky Draw",
      "date": "22nd June 2029",
      "time": "5pm"
    },
    {
      "title": "Lion Dance",
      "date": "23rd June 2029",
      "time": "1pm"
    }
  ]

  const renderShops = () => {
    const jsxElements = [];
    for (let s of shops) {
      jsxElements.push(<li className="list-group-item">{s}</li>)
    }
    return jsxElements;
  }

  return (
    <div className="container">
      <h1>Shop Directory</h1>
      <ul className="list-group">
        {renderShops()}
      </ul>

      {
        shops.map(function (s) {
          return <div className="card">
            <div className="card-body">
              {s}
            </div>
          </div>
        })
      }

      <h1>Upcoming Events</h1>

      {
        events.map(function (e) {
          return (<div className="card">
            <div className="card-body">
              <div className="card-title">
                <h4>{e.title}</h4>
              </div>
              <ul>
                <li>Date:{e.date}</li>
                <li>Time:{e.time}</li>
              </ul>

            </div>
          </div>)
        })
      }

    </div>
  );
}

export default App;
