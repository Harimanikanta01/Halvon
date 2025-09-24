import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './New.css';

function Mainwatches() {
  const backendurl = (process.env.REACT_APP_URL).replace(/\/+$/, "");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch watches function
  const fetchWatches = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${backendurl}/main1get`);
      setData(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Search function
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim()) {
      const filtered = data.filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  // Filter by category
  const filterByCategory = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => 
        item.category && item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  // Handle product click
  const handleProductClick = (id) => {
    navigate(`/open1/${id}`);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchWatches();
  }, []);

  return (
    <div className="watch-app">
      {/* Hero Section */}
      <section className="watch-hero">
        <div className="watch-container">
          <div className="watch-header">
            <h1 className="watch-title">Luxury Watch Collection</h1>
            <p className="watch-subtitle">
              Discover timeless elegance with our premium selection of luxury watches. 
              Each timepiece is crafted with precision and designed for those who appreciate the finer things in life.
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="watch-nav">
            <div className="nav-content">
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for watches, brands, or features..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <span className="search-icon">🔍</span>
              </div>
              
              <div className="nav-menu">
                <button className="nav-item">Categories</button>
                <button className="nav-item">Brands</button>
                <button className="nav-item">Cart</button>
                <button className="nav-item">Account</button>
              </div>
            </div>
          </nav>
          
          {/* Filter Tabs */}
          <div className="filter-tabs">
            {["all", "luxury", "sports", "classic", "smart"].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => filterByCategory(filter)}
              >
                {filter === "all" ? "All Watches" : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="watch-container">
        {isLoading ? (
          <div className="loading-container">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="loading-card"></div>
            ))}
          </div>
        ) : filteredData.length === 0 ? (
          <div className="empty-state">
            <h3 className="empty-title">No watches found</h3>
            <p className="empty-text">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredData.map((watch) => (
              <div
                key={watch._id}
                className="watch-card"
                onClick={() => handleProductClick(watch._id)}
              >
                <div className="watch-img-container">
                  <img
                    className="watch-image"
                    src={watch.img1}
                    alt={watch.name}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1523170335258-f5eF6bf8c9a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                    }}
                  />
                  <div className="watch-badge">Premium</div>
                </div>
                <div className="watch-info">
                  <h3 className="watch-name">{watch.name}</h3>
                  <div className="watch-price">₹{watch.price}</div>
                  <div className="watch-features">
                    <span className="watch-feature">⭐ Automatic</span>
                    <span className="watch-feature">💧 Water Resistant</span>
                    <span className="watch-feature">💎 Sapphire Crystal</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Mainwatches;