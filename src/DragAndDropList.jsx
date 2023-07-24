import React, { useState } from 'react';
import './DragAndDropList.css';
import './Navbar.css';
// eslint-disable-next-line
const Navbar = () => {
    return (
      
      <div className="top-navbar" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/128/8383/8383466.png" alt="Logo" />
        </div>
        <div className="navbar-text">
          <p>iamneo.ai Talent Center</p>
        </div>
        <div className="additional-elements">
        <span>
        <input type="text" placeholder="Search..." style={{
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            marginRight: '10px', 
          }} />
        </span>
        <span>
        <button
            style={{
              padding: '10px 10px', 
              backgroundColor: 'darkblue', 
              color: 'white', 
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer', 
              marginRight: '0px', 
            }}
          >
            + Add New
          </button>
          </span>
        <span>
          <img src="https://cdn-icons-png.flaticon.com/128/8924/8924333.png" alt="Element 1" width="21" height="20"/>
        </span>
        <span>
          <img src="https://cdn-icons-png.flaticon.com/128/3916/3916693.png" alt="Element 2" width="21" height="20" />
        </span>
        <span>
          <a href =" ">
          <img src="https://cdn-icons-png.flaticon.com/128/5542/5542419.png" alt="Element 3" width="23" height="22"/>
          </a>
        </span>
      </div>
      
      </div>
    );
  };
  // eslint-disable-next-line
const DragAndDropList = ({ listTitle, listItems }) => {
  const [items, setItems] = useState(listItems);
  // eslint-disable-next-line
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const onDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };
  // eslint-disable-next-line
  const onItemClick = (index) => {
    setSelectedItemIndex(index);
  };
  const activeCandidatesCount = items.length;
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDrop = (e, newIndex) => {
    const oldIndex = e.dataTransfer.getData('index');
    const newItems = [...items];
    const [movedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, movedItem);
    setItems(newItems);
  };
   const handleStarClick = (itemIndex, rating) => {
    const newItems = [...items];
    newItems[itemIndex].rating = rating;
    setItems(newItems);
  };
  const renderStars = (itemIndex) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= items[itemIndex].rating ? 'star filled' : 'star';
      stars.push(
        <span
          key={i}
          className={starClass}
          onClick={() => handleStarClick(itemIndex, i)}
        >
        </span>
      );
    }
    return stars;
  };
  // eslint-disable-next-line
  return (
    <div className="DragAndDropList">
      {/* Main card for the list */}
      {/* Top Navbar */}
      <div className="main-card">
      <h2>{listTitle} - {activeCandidatesCount} </h2>
      </div>
      {/* List of item cards */}
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`DragAndDropList-card ${selectedItemIndex === index ? 'selected-item' : ''}`}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
          >
            <div>
              {/* Image */}
              <img src={item.imageSrc} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.company}</p>
              <div className="rating">{renderStars(index)}</div>
              {/* Display the "open" information */}
              <p>{item.open}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  const [openItems, setOpenItems] = useState([
    { id: 1, name: 'JohnDoe', company: 'ABC Inc.REQ:#1062',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png'},
    { id: 2, name: 'JaneSmith', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 3, name: 'MichaelJohnson', company: 'LMN Co.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 4, name: 'John', company: 'ABC Inc.', imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 5, name: 'Jane', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 6, name: 'Michael', company: 'LMN Co.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 7, name: 'Doe', company: 'ABC Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 8, name: 'Smithy', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 9, name: 'Johnsongames', company: 'LMN Co.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 10, name: 'Johny', company: 'ABC Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 11, name: 'Mark', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
  ]);

  const  [contactedItems, setContactedItems] = useState( [
    { id: 12, name: 'Kaviya', company: 'Infotech Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 13, name: 'Janewilliam', company: 'XeZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 14, name: 'Michaelwilliam', company: 'LMt Co.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 15, name: 'Johnson', company: 'ABC Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 16, name: 'Smithjones', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    ]);
  const Written = [
    { id: 17, name: 'Manoj', company: 'Infotech Inc.', imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 17, name: 'Kaviyadharshini', company: 'Infotech Inc.', imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 18, name: 'Janny', company: 'XeZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 19, name: 'Daniol', company: 'ABC Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 20, name: 'Julie', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 21, name: 'James', company: 'ABC Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 22, name: 'Santhosh', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 23, name: 'Frances', company: 'ABC Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 24, name: 'Jonial', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 25, name: 'Moses', company: 'LMt Co.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 26, name: 'Mouses', company: 'LMt Co.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
  ];
  const writtencomplete = [
    { id: 27, name: 'James', company: 'Infotech Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 28, name: 'Soothy', company: 'XeZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 29, name: 'Dames', company: 'LMt Co.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/5542/5542419.png' },
    { id: 30, name: 'Dommy', company: 'ABC Inc.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
    { id: 31, name: 'Rambo', company: 'XYZ Corp.',  imageSrc: 'https://cdn-icons-png.flaticon.com/128/9129/9129396.png' },
  ];
  const Newton = [
  ];
  const [selectedOption, setSelectedOption] = useState('all');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleMoveToContacted = (itemIndex) => {
    const newOpenItems = [...openItems];
    const [movedItem] = newOpenItems.splice(itemIndex, 1);
    setContactedItems([...contactedItems, movedItem]);
    setOpenItems(newOpenItems);
  };

  const handleMoveToOpen = (itemIndex) => {
    const newContactedItems = [...contactedItems];
    const [movedItem] = newContactedItems.splice(itemIndex, 1);
    setOpenItems([...openItems, movedItem]);
    setContactedItems(newContactedItems);
  };
  const allCandidatesActiveCount = openItems.length + contactedItems.length + Written.length + writtencomplete.length + Newton.length;
  const [sortBy, setSortBy] = useState('latest'); // Default is 'latest'

  // Function to handle sorting change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to sort the main cards based on the selected option
  const sortMainCards = () => {
    switch (sortBy) {
      case 'latest':
        return [...openItems, ...contactedItems, ...Written, ...writtencomplete, ...Newton].sort((a, b) => b.id - a.id);
      case 'oldest':
        return [...openItems, ...contactedItems, ...Written, ...writtencomplete, ...Newton].sort((a, b) => a.id - b.id);
      case 'newest':
        return [...openItems, ...contactedItems, ...Written, ...writtencomplete, ...Newton].reverse();
      default:
        return [...openItems, ...contactedItems, ...Written, ...writtencomplete, ...Newton];
    }
  };

  // Get the sorted main cards based on the selected option
  // eslint-disable-next-line
  const sortedMainCards = sortMainCards();
  return (
    <div className="App">
     {/* Top Navbar */}
      {/* Top Navbar */}
      <Navbar />
         {/* Navigation Bar */}
         <div className="navbar">
        {/* Add your navigation links here */}
        <ul>
        <li>
            <img src="https://cdn-icons-png.flaticon.com/128/8383/8383466.png" alt="Link 1" width="21" height="20" />
          </li>
          <li>
            <a href =" ">
            <img src="https://cdn-icons-png.flaticon.com/128/8371/8371275.png" alt="Link 1" width="21" height="20" />
            </a>
          </li>
          <li>
            <a href=" ">
            <img src="https://cdn-icons-png.flaticon.com/128/1942/1942127.png" alt="Link 2" width="21" height="20" />
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/">
            <img src="https://cdn-icons-png.flaticon.com/128/4625/4625547.png" alt="Link 3" width="21" height="20" />
            </a>
          </li>
          <li>
            <a href=" ">
            <img src="https://cdn-icons-png.flaticon.com/128/1387/1387889.png" alt="Link 4" width="21" height="20" />
            </a>
          </li>
        </ul>
      </div>
      <div className="scrollable-area">
      <div className="scrollable-navbar">
    <ul>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/128/3916/3916670.png" alt="Link 3" width="15" height="15" />
          </li>
      <li style={{fontWeight: 'bold'}}>Jobs</li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="Link 3" width="10" height="10" />
          </li>
      <li style={{fontWeight: 'bold'}}>Full Stack Developer</li>
      <li>
      <input type="text" placeholder="View Job Details" style={{
            padding: '3px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            marginRight: '10px', 
          }} />
      </li>
      <li>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              style={{
                padding: '3px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginLeft: '780px',
                fontWeight: 'bold'
              }}
            >
              <option value="all">Add Candidates</option>
              <option value="recent">Recent</option>
              <option value="featured">Featured</option>
            </select>
          </li>
      <li>
      <button
            style={{
              padding: '10px 10px',
              backgroundColor: 'darkblue', 
              color: 'white', 
              borderRadius: '5px',
              border: 'none', 
              cursor: 'pointer', 
              marginLeft: '0px', 
              position:'fixed',
            }}
          >
            Published
          </button>
      </li>
    </ul>
  </div>

  <div className="scrollable-navbar" style={{ backgroundColor: '#f0f0f0', padding: '0px' ,top:'92px',width:'100%'}}>
          <ul>
          <li>
              <span style={{margin:'10px'}}>All Candidates - Active  ({allCandidatesActiveCount})</span>
            </li>
            <li style={{margin :'100px'}}>
              <span>Sort By:</span>
              <select value={sortBy} onChange={handleSortChange} style={{margin:'10px',padding:'5px',border: 'none', outline: 'none', backgroundColor: 'transparent',paddingTop:'3.5px',fontWeight: 'bold'}}>
                <option value="latest">Latest Update</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
              </select>
            </li>
          </ul>
        </div>
  
        <div className="list-container">
          {/* First DragAndDropList */}
          <DragAndDropList listTitle="Open" listItems={openItems}  onMoveToContacted={handleMoveToContacted}/>
        </div>
        <div className="list-container">
          {/* Second DragAndDropList */}
          <DragAndDropList listTitle="Contacted" listItems={contactedItems} onMoveToOpen={handleMoveToOpen} />
        </div>
        <div className="list-container">
          {/* Third DragAndDropList */}
          <DragAndDropList listTitle="Written Test" listItems={Written} />
        </div>
        <div className="list-container">
          {/* Fourth DragAndDropList */}
          <DragAndDropList
            listTitle="Written Test completed"
            listItems={writtencomplete}
          />
        </div>
        <div className="list-container">
          {/* Fourth DragAndDropList */}
          <DragAndDropList
            listTitle="Newton School"
            listItems={Newton}
          />
        </div>
      </div>
      </div>
  );
};
export default App;
