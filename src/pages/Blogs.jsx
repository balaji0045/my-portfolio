import React, { useContext, useEffect, useState } from 'react';
import './Blogs.css';
import NavBarPages from '../components/NavBar/NavBarPages';
import Footer from '../components/Footer/Footer';
import { ThemeContext } from '../components/Context/themeContext';


const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const {theme}=useContext(ThemeContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@balajidk100'
      );
      const data = await response.json();
      setPosts(data.items);
    };

    fetchPosts();
  }, []);

  // const customImages = {
  //   "Spread Operator in JavaScript": "/images/spreaoperator.png",
  //   "Custom Cursor in CSS": "/images/customcursor.jpeg",
  //   "Understanding JavaScript Objects": "/images/objects.png",
  //   "How to Save an Image in React": "/images/saveimage.jpeg",
  //   // Add more mappings as needed
  // };

  return (
    <div className='blogs' >
      <NavBarPages />
      <div className="blogscontainer" style={{
      backgroundColor:theme === 'dark'?'#212529':''
    }}>
        <h1 style={{textAlign:'center',
           color:theme==='dark'?'white':''
        }}>My Blogs</h1>
        

        <div className='blogs-item'>

          {posts.map(post => (
            <div key={post.guid} className='listitem' 
            style={{
      backgroundColor:theme === 'dark'?'grey':'',
      marginBottom: '20px',
      color:theme==='dark'?"white":'white'

    }}
            >
              <img 
                src='https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif'

                style={{width:"250px",height:"100px"}}
              />
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <h2 className='posttitle'>{post.title}</h2>
              </a>
            </div>
          ))}
        
        
        </div>
      </div>
      <div>
      <Footer />

      </div>
    </div>
  );
}

export default Blogs;
