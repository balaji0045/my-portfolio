import React from 'react'
import './Service.css'
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DevicesIcon from '@mui/icons-material/Devices';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ConstructionIcon from '@mui/icons-material/Construction';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/themeContext';
const Service = () => {
   const {theme}=useContext(ThemeContext);
  return (
    <div className='services' style={{
      backgroundColor: theme === 'dark'?'#212529':'',
      color:theme==="dark"?"white":""
    }}>
      <div className="service-container">

         <header className='header'>
          <h2 style={{
            color:theme=== 'dark'?"#3399ff":''
                    }}>Services</h2>
         </header>
    <div className="row-container">
          <div className="columns"
          style={{
            backgroundColor: theme === 'dark'?'black':'white',
            color:theme==="dark"?'white':''

          }}>
               <div className="icon">
              <ArchitectureIcon className='icon' style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}/>
                </div>
                 <div className="sub-heading">
                    <h3 style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}>Design UX/UI</h3>
                 </div>
                 <div className="service-para">
                 Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website
                 </div>
           </div>
           
           <div className="columns"  style={{
            backgroundColor: theme === 'dark'?'black':'white',
            color:theme==="dark"?'white':''

          }}>
               <div className="icon">
              <DevicesIcon  className='icon' style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }} />
                </div>
                 <div className="sub-heading">
                    <h3 style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}>Web Development</h3>
                 </div>
                 <div className="service-para">
                 Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.
                 </div>
           </div>

           <div className="columns"  style={{
            backgroundColor: theme === 'dark'?'black':'white',
            color:theme==="dark"?'white':''
          }}
          >
               <div className="icon">
              <QueryStatsIcon   className='icon' style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}/>
                </div>
                 <div className="sub-heading">
                    <h3 style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}>Digital Marketing</h3>
                 </div>
                 <div className="service-para">
                 Prepare a strategy and objectives for the promotion of the brand provided by the client, using the internet or other platforms to promote products and services of the brand in question.
                 </div>
           </div>

           <div className="columns" style={{
            backgroundColor: theme === 'dark'?'black':'white',
            color:theme==="dark"?'white':''
          }}>
               <div className="icon">
              <ConstructionIcon  className='icon' style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}/>
                </div>
                 <div className="sub-heading">
                    <h3 style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}>Web Maintenance</h3>
                 </div>
                 <div className="service-para">
                 Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.
                 </div>
           </div>

           <div className="columns" style={{
            backgroundColor: theme === 'dark'?'black':'white',
            color:theme==="dark"?'white':''
          }}>
               <div className="icon">
              <SearchIcon   className='icon' style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}/>
                </div>
                 <div className="sub-heading">
                    <h3 style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}>Web Positioning (SEO)</h3>
                 </div>
                 <div className="service-para">
                 Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines
                 </div>
           </div>


           <div className="columns" style={{
            backgroundColor: theme === 'dark'?'black':'white',
            color:theme==="dark"?'white':''
          }}>
               <div className="icon">
              <SpeedIcon   className='icon' style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}/>
                </div>
                 <div className="sub-heading">
                    <h3 style={{
                     color:theme=== 'dark'?"#3399ff":''
                    }}>Website Optimization</h3>
                 </div>
                 <div className="service-para">
                 Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website                 </div>
           </div>

          


        </div>


      </div>
    </div>
  )
}

export default Service