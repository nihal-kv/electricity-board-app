// storage.js

// Save data to localStorage
export const saveToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };
  
  // Load data from localStorage
  export const loadFromLocalStorage = (key) => {
    try {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error("Error loading from localStorage", error);
      return null;
    }
  };
  
  // Save data to sessionStorage
  export const saveToSessionStorage = (key, data) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to sessionStorage", error);
    }
  };
  
  // Load data from sessionStorage
  export const loadFromSessionStorage = (key) => {
    try {
      const storedData = sessionStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error("Error loading from sessionStorage", error);
      return null;
    }
  };
  